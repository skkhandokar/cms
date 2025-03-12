from django.urls import path
from .views import MachineCategoryListView, MachineListView, MachineDetailView

urlpatterns = [
    path('categories/', MachineCategoryListView.as_view(), name='machine-categories'),
    path('<str:category_name>/', MachineListView.as_view(), name='machine-list'),
    path('machine/<str:name>/', MachineDetailView.as_view(), name='machine-detail'),
]
