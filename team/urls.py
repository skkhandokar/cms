from django.urls import path
from . import views

urlpatterns = [
    path('chairmen/', views.ChairmanList.as_view(), name='chairman-list'),
    path('managing-directors/', views.ManagingDirectorList.as_view(), name='managing-director-list'),
    path('staff/', views.StaffList.as_view(), name='staff-list'),
]