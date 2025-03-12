from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DoctorViewSet, DoctorProfileViewSet, doctor_profile_by_name

# Create a router and register viewsets
router = DefaultRouter()
router.register(r'', DoctorViewSet, basename='doctor')  # Register DoctorViewSet under 'doctors/'
router.register(r'octor-profiles', DoctorProfileViewSet, basename='doctorprofile')  # Register DoctorProfileViewSet under 'doctor-profiles/'

# Define the URL patterns
urlpatterns = [
    path('', include(router.urls)),  # Include the router-generated URLs
    path('doctor-profiles/<str:doctor_name>/', doctor_profile_by_name, name='doctor-profile-by-name'),  # Custom route
]