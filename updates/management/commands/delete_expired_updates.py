from django.core.management.base import BaseCommand
from django.utils import timezone
from updates.models import Update

class Command(BaseCommand):
    help = 'Deletes expired updates from the database'

    def handle(self, *args, **kwargs):
        # Get all updates that have expired
        expired_updates = Update.objects.filter(date__lt=timezone.now().date() - timezone.timedelta(days=1))
        count = expired_updates.count()

        # Delete expired updates
        expired_updates.delete()

        self.stdout.write(self.style.SUCCESS(f'Successfully deleted {count} expired updates.'))