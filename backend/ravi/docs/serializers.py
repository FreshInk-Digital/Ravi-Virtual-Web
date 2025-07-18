from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Book, BookCategory, Publication, Messages, Cases

User = get_user_model()

# --- User Serializer ---
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['email'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

# --- Book Serializer ---
class BookSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = Book
        fields = [
            'id', 'book', 'name', 'year', 'description',
            'sensitivity', 'date_created', 'last_update',
            'category_name'
        ]
        read_only_fields = ['date_created', 'last_update']

# --- Book Category Serializer ---
class BookCategorySerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True, read_only=True)

    class Meta:
        model = BookCategory
        fields = ['id', 'name', 'books']

# --- Publication Serializer ---
class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = [
            'name', 'publication', 'description',
            'date_created', 'last_update'
        ]

# --- Contact Messages Serializer ---
class ContactMessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = [
            'user_name', 'email', 'phone',
            'message', 'status', 'date_created'
        ]
        read_only_fields = ['date_created']

# --- Collaborator Messages Serializer ---
class CollaboratorMessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = [
            'collaborator_name', 'location', 'collaborator_phone',
            'message', 'status', 'date_created'
        ]
        read_only_fields = ['date_created']

# --- Cases Serializer ---
class CasesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cases
        fields = [
            'id', 'case_number', 'case_code',
            'appellant', 'respondent', 'description',
            'court', 'tax_type', 'tax_court',
            'originating_cases', 'year', 'date_created',
            'file_path'
        ]
