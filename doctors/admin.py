from django.contrib import admin
from .models import Doctor, DoctorProfile  # Ensure correct model names

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialist')  
    search_fields = ('name', 'specialist')

@admin.register(DoctorProfile)
class DoctorProfileAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'email', 'phone', 'experience')  # Fix field name
    search_fields = ('doctor__name', 'email', 'phone')  # Use correct relation lookup

