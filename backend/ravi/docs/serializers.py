from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import *

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email'],  # If you want to auto-fill username with email
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['name', 'publication', 'description', 'date_created', 'last_update']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['user_name', 'email', 'message', 'status', 'date_created']