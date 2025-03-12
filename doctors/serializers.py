from rest_framework import serializers
from .models import Doctor, DoctorProfile

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'specialist', 'photo']

class DoctorProfilesSerializer(serializers.ModelSerializer):
    doctor = serializers.CharField(source='doctor.name', read_only=True)  # Display doctor's name instead of ID

    class Meta:
        model = DoctorProfile
        fields = '__all__'  # Serialize all fields

class DoctorWithProfilesSerializer(serializers.ModelSerializer):
    profiles = DoctorProfilesSerializer(many=True, read_only=True)

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'specialist', 'photo', 'profiles']
