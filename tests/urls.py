from django.urls import path
from . import views

urlpatterns = [
    path('', views.TestGroupList.as_view(), name='test-group-list'),
    path('<str:name>/', views.TestGroupDetail.as_view(), name='test-group-detail'),
    path('<str:group_name>/tests/', views.TestList.as_view(), name='test-list'),
]