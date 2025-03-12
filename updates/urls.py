from django.urls import path
from .views import UpdateListAPIView

urlpatterns = [
    path('', UpdateListAPIView.as_view(), name='updates_api'),
]