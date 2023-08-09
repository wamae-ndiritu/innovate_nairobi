from .models import Emergency , Emergency_Type 
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class EmergencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Emergency
        fields = ['name', 'latitude',  'latitude', 'type', 'time']