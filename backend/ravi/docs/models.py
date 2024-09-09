from django.db import models
from django.contrib.auth.models import User

class Publication(models.Model):
    publication = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="publications")

    def __str__(self):
        return (self.name)
    
    
class Messages(models.Model):
    URGENT = 'URG'
    NORMAL = 'NOR'
    NOT_URGENT = 'NUR'

    STATUS_CHOICES = [
        (URGENT, 'Urgent'),
        (NORMAL, 'Normal'),
        (NOT_URGENT, 'Not Urgent'),
    ]

    user_name = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=3,
        choices=STATUS_CHOICES,
        default=NOT_URGENT,
    )

    def __str__(self):
        return self.user_name
    
    class Meta:
        verbose_name_plural = 'Messages'
    