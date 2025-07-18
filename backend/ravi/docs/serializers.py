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
            'year',
            'description', 
            'sensitivity',
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


# ContactMessagesSerializer
class ContactMessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = [
            'user_name',
            'email',
            'phone',
            'message',
            'status',
            'date_created',
        ]
        read_only_fields = ['date_created']


# CollaboratorMessagesSerializer (full payload)
class CollaboratorMessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = [
            'collaborator_code',
            'location',
            'collaborator_phone',
            'message',
            'status',
            'date_created',
        ]
        read_only_fields = ['date_created']



class CasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cases
        fields = [
           'id', 'case_number', 'case_code',  'appellant', 'respondent', 'description', 'court', 'tax_type', 'tax_court', 'originating_cases', 'year',  'date_created', 'file_path',]

class CollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaborator
        fields = ['id', 'region', 'collaborator_code', 'first_name', 'last_name', 'phone', 'email']
        read_only_fields = ['collaborator_code']

