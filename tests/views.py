from rest_framework import generics
from .models import TestGroup, Test
from .serializers import TestGroupSerializer, TestSerializer

class TestGroupList(generics.ListAPIView):
    queryset = TestGroup.objects.all()
    serializer_class = TestGroupSerializer

class TestGroupDetail(generics.RetrieveAPIView):
    queryset = TestGroup.objects.all()
    serializer_class = TestGroupSerializer
    lookup_field = 'name'  # Use 'name' instead of 'id'

class TestList(generics.ListAPIView):
    serializer_class = TestSerializer

    def get_queryset(self):
        group_name = self.kwargs['group_name']
        return Test.objects.filter(group__name=group_name)  # Filter by group name