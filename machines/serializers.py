# from rest_framework import serializers
# from .models import MachineCategory, Machine

# class MachineCategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = MachineCategory
#         fields = '__all__'

# class MachineSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Machine
#         fields = '__all__'



from rest_framework import serializers
from .models import MachineCategory, Machine

class MachineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineCategory
        fields = '__all__'

class MachineSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Machine
        fields = '__all__'  # This will include all fields, including the new category_name field
