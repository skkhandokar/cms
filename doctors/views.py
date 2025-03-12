from django.shortcuts import render

# Create your views here.
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Doctor, DoctorProfile
from .serializers import DoctorSerializer, DoctorProfilesSerializer

# Doctor ViewSet
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

# Doctor Profile ViewSet
class DoctorProfileViewSet(viewsets.ModelViewSet):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfilesSerializer

# Custom API view to get a doctor's profile by name
@api_view(['GET'])
def doctor_profile_by_name(request, doctor_name):
    doctor = get_object_or_404(Doctor, name =doctor_name)

    try:
        profile = DoctorProfile.objects.get(doctor=doctor)
        serializer = DoctorProfilesSerializer(profile)
        return Response(serializer.data)
    except DoctorProfile.DoesNotExist:
        return Response({'error': 'Profile not found for this doctor'}, status=404)







