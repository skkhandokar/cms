from django.db import models
from django.utils import timezone

class Update(models.Model):
    TYPE_CHOICES = [
        ('news', 'News'),
        ('alert', 'Alert'),
        ('message', 'Message'),
    ]

    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    expiration_days = models.PositiveIntegerField(default=1)  # Number of days before expiration

    def expiration_date(self):
        """Calculate the expiration date based on the creation date and expiration_days."""
        return self.date + timezone.timedelta(days=self.expiration_days)

    def is_expired(self):
        """Check if the update has expired."""
        return timezone.now().date() > self.expiration_date()

    def __str__(self):
        return self.title