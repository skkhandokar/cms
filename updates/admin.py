from django.contrib import admin
from .models import Update

@admin.register(Update)
class UpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'date', 'expiration_days', 'expiration_date', 'is_expired')
    list_filter = ('type', 'date', 'expiration_days')
    search_fields = ('title', 'content')
    ordering = ('-date',)