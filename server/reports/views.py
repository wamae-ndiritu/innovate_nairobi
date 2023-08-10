from math import atan2, cos, radians, sin, sqrt

from django.contrib.auth.models import User
from django.views import View
from django.http import JsonResponse
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .call import VOICE

from .models import Emergency, Emergency_Type, Institution
from .serializers import (CreateEmergencySerializer,
                          CreateInstitutionSerializer, EmergencySerializer,
                          InstitutionSerializer, TypeSerializer)


# Create your views here.
# ViewSets define the view behavior.
class EmergencyList(APIView):

    def get(self, request, format=None):
        emergencies = Emergency.objects.all()
        serializer = EmergencySerializer(emergencies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CreateEmergencySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class InstitutionList(APIView):

    def get(self, request, format=None):
        emergencies = Institution.objects.all()
        serializer = InstitutionSerializer(emergencies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CreateInstitutionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EmergencyType(APIView):

    def get(self, request, format=None):
        emergencies = Emergency_Type.objects.all()
        serializer = TypeSerializer(emergencies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class NearestInstitutionView(View):
    def get(self, request, emergency_type_id, *args, **kwargs):
        # Declare Variables of shortest_distance and nearest_institution
        shortest_distance = None
        nearest_institution = None

        # get emergency type
        type = emergency_type_id
        institutions = Institution.objects.filter(type=type)

        # Emergency Location
        if request.GET.get('latitude') is not None and request.GET.get('latitude') is not None:
            emergencylat = float(request.GET.get('latitude'))
            emergencylon = float(request.GET.get('longitude'))
        else:
            emergencylat = None
            emergencylon = None

        # Get User
        user_id = request.GET.get('user')
        user = User.objects.get(id=user_id)
        number = user.profile.number

        if emergencylat is not None and emergencylon is not None:
            for institution in institutions:
                instlat = institution.latitude
                instlon = institution.longitude

                # Radius of the Earth in kilometers
                Radius = 6371.0

                # defining variables for calculation
                lat1_rad = radians(emergencylat)
                lon1_rad = radians(emergencylon)
                lat2_rad = radians(instlat)
                lon2_rad = radians(instlon)

                dlon = lon2_rad - lon1_rad
                dlat = lat2_rad - lat1_rad

                # use some math to calculate the distance
                a = sin(dlat / 2)**2 + cos(lat1_rad) * \
                    cos(lat2_rad) * sin(dlon / 2)**2
                c = 2 * atan2(sqrt(a), sqrt(1 - a))

                distance = Radius * c

                if shortest_distance is None or distance < shortest_distance:
                    shortest_distance = distance
                    nearest_institution = institution

            response_data = {
                'shortest_distance': shortest_distance,
                'emergency latitude': emergencylat,
                'emergency longitude': emergencylon,
                'nearest_institution': {
                    'name': nearest_institution.name,  # Replace with the appropriate attribute
                    # Replace with the appropriate attribute
                    'latitude': nearest_institution.latitude,
                    # Replace with the appropriate attribute
                    'longitude': nearest_institution.longitude,
                    'number': nearest_institution.number,
                }
            }
            call_to = nearest_institution.number
            make_call = VOICE(call_to)
            make_call.call()

        else:
            institution_number = "+254791554834"

            response_data = {
                'number': institution_number,
            }

            VOICE.call(self, institution_number)

        return JsonResponse(response_data)
