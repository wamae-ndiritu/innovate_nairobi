from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status , viewsets

from .models import Emergency , Institution, Emergency_Type
    
from .serializers import EmergencySerializer,CreateEmergencySerializer, CreateInstitutionSerializer, InstitutionSerializer , TypeSerializer

from django.contrib.auth.models import User


# Create your views here.
# ViewSets define the view behavior.
class EmergencyList(APIView):

    def get(self ,request , format=None):
        emergencies = Emergency.objects.all()
        serializer = EmergencySerializer(emergencies , many= True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CreateEmergencySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class InstitutionList(APIView):

    def get(self ,request , format=None):
        emergencies = Institution.objects.all()
        serializer = InstitutionSerializer(emergencies , many= True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CreateInstitutionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class EmergencyType(APIView):

    def get(self ,request , format=None):
        emergencies = Emergency_Type.objects.all()
        serializer = TypeSerializer(emergencies , many= True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)