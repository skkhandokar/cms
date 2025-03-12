from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import MachineCategory, Machine
from .serializers import MachineCategorySerializer, MachineSerializer

class MachineCategoryListView(ListAPIView):
    queryset = MachineCategory.objects.all()
    serializer_class = MachineCategorySerializer

    

class MachineListView(ListAPIView):
    serializer_class = MachineSerializer
    
    def get_queryset(self):
        category_name = self.kwargs['category_name']
        return Machine.objects.filter(category__name=category_name)
    


class MachineDetailView(RetrieveAPIView):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    lookup_field = 'name'
