from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Emergency
from .serializers import EmergencySerializer

# Create your views here.
# ViewSets define the view behavior.
class EmergencyList(APIView):

    def get(self ,request , format=None):
        emergencies = Emergency.objects.all()
        serializer = EmergencySerializer(emergencies , many= True)
        return Response(serializer.data)