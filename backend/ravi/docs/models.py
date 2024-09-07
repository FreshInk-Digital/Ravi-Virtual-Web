from django.db import models

# Create your models here.
class Publication(models.Model):
    publication = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.name)
    
    
class Messages(models.Model):
    user_name = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return (self.user_name)
    
    