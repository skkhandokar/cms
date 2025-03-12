from django.contrib import admin
from .models import MachineCategory, Machine

@admin.register(MachineCategory)
class MachineCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Machine)
class MachineAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'image')
    search_fields = ('name', 'category__name')
    list_filter = ('category',)