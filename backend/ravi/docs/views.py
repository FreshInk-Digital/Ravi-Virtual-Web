from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Publication, Messages
from .serializers import PublicationSerializer, MessagesSerializer, UserSerializer

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer
    
    def get_permissions (self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        
        return [IsAuthenticated()]

class MessagesViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    serializer_class = MessagesSerializer
    
    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        
        return [IsAuthenticated()]
