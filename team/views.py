from rest_framework import generics
from .models import Chairman, ManagingDirector, Staff
from .serializers import ChairmanSerializer, ManagingDirectorSerializer, StaffSerializer

class ChairmanList(generics.ListCreateAPIView):
    queryset = Chairman.objects.all()
    serializer_class = ChairmanSerializer

class ManagingDirectorList(generics.ListCreateAPIView):
    queryset = ManagingDirector.objects.all()
    serializer_class = ManagingDirectorSerializer

class StaffList(generics.ListCreateAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer