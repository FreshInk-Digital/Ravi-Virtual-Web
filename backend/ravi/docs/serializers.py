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

class BookSerializer(serializers.ModelSerializer):
    # This will serialize the category name instead of their IDs
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Book
        fields = [
            'id', 
            'book', 
            'name', 
            'description', 
            'date_created', 
            'last_update', 
            'category_name', 
        ]
        read_only_fields = ['date_created', 'last_update']

class BookCategorySerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True)  # Include related books for each category
    
    class Meta:
        model = BookCategory
        fields = ['id', 'name', 'books']


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = ['name', 'publication', 'description', 'date_created', 'last_update']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['user_name', 'email', 'message', 'status', 'date_created']