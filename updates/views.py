from rest_framework import generics
from .models import Update
from .serializers import UpdateSerializer

class UpdateListAPIView(generics.ListAPIView):
    queryset = Update.objects.all().order_by('-date')
    serializer_class = UpdateSerializer