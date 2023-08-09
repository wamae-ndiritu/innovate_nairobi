from .models import Emergency , Emergency_Type , Institution
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emergency_Type 
        fields = ["id", "name"]

class InstitutionSerializer(serializers.ModelSerializer):
    type = TypeSerializer()
    class Meta:
        model = Institution 
        fields = ['id', 'name' ,'latitude',  'longitude', 'type','number']

class CreateInstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = ['id','name', 'latitude',  'longitude', 'type']


class EmergencySerializer(serializers.ModelSerializer):
    type = TypeSerializer()
    class Meta:
        model = Emergency
        fields = ['id','name', 'latitude',  'longitude', 'type', 'time' , 'institution']

class CreateEmergencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Emergency
        fields = ['id','name', 'latitude',  'longitude', 'type', 'time' , 'institution']

