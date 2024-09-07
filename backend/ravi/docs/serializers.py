from rest_framework import serializers
from .models import *

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['name', 'description', 'date_created', 'last_update']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['user_name', 'email', 'message', 'status', 'date_created']