from django.db import models

# Create your models here.

from django.db import models

class Doctor(models.Model):
    name = models.CharField(max_length=255, db_index=True)
    specialist = models.CharField(max_length=255)
    photo = models.ImageField(upload_to='doctors_photos/')

    class Meta:
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"

    def __str__(self):
        return self.name

class DoctorProfile(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='profiles')  # Changed to ForeignKey
    phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(unique=True, blank=True, null=True, db_index=True)
    qualification = models.TextField()
    experience = models.PositiveIntegerField(help_text="Years of experience")
    hospital = models.CharField(max_length=255, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    consultation_fee = models.DecimalField(max_digits=10, decimal_places=2)
    social_media = models.JSONField(blank=True, null=True, help_text="Store links to social media profiles")

    available_time = models.JSONField(blank=True, null=True, help_text="available time")


    class Meta:
        verbose_name = "Doctor Profile"
        verbose_name_plural = "Doctor Profiles"

    def __str__(self):
        return f"Profile of {self.doctor.name}"