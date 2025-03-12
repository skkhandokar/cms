from django.db import models

class TestGroup(models.Model):
    name = models.CharField(max_length=100, unique=True)  # Ensure names are unique
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Test(models.Model):
    name = models.CharField(max_length=100)
    group = models.ForeignKey(TestGroup, on_delete=models.CASCADE, related_name='tests')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.group.name})"