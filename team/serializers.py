from rest_framework import serializers
from .models import Chairman, ManagingDirector, Staff

class ChairmanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chairman
        fields = '__all__'

class ManagingDirectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = ManagingDirector
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'