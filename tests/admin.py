from django.contrib import admin
from .models import TestGroup, Test

@admin.register(TestGroup)
class TestGroupAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name']

@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ['name', 'group', 'price', 'description']
    list_filter = ['group']
    search_fields = ['name']