from django.db import models

class MachineCategory(models.Model):
    name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Machine(models.Model):
    category = models.ForeignKey(MachineCategory, on_delete=models.CASCADE, related_name='machines')
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='machines/')
    
    def __str__(self):
        return self.name