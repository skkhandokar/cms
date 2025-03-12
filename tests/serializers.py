from rest_framework import serializers
from .models import TestGroup, Test

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['id', 'name', 'price', 'description']

class TestGroupSerializer(serializers.ModelSerializer):
    tests = TestSerializer(many=True, read_only=True)

    class Meta:
        model = TestGroup
        fields = ['id', 'name', 'description', 'tests']