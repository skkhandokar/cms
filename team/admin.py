from django.contrib import admin
from .models import Chairman, ManagingDirector, Staff

@admin.register(Chairman)
class ChairmanAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')

@admin.register(ManagingDirector)
class ManagingDirectorAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('name', 'position')