from django.contrib.auth.models import User
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Publication, Messages, Book, BookCategory, Cases, Agent
from .serializers import PublicationSerializer, MessagesSerializer, CasesSerializer, BookSerializer, BookCategorySerializer, AgentSerializer
from django.http import FileResponse, HttpResponseForbidden
from rest_framework.decorators import action
from rest_framework.response import Response

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
    def get_permissions (self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        
        return [IsAuthenticated()]
    
class BookCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BookCategory.objects.all()
    serializer_class = BookCategorySerializer
    permission_classes = [AllowAny]    
    
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


class CasesViewSet(viewsets.ModelViewSet):
    queryset = Cases.objects.all()
    serializer_class = CasesSerializer
    
    def get_permissions (self):
        if self.action in ['create', 'list', 'retrieve']:
            return [AllowAny()]
        
        return [IsAuthenticated()]
    
def stream_book(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
        if book.sensitivity == "critical" and not request.user.has_perm("view_critical_book"):
            return HttpResponseForbidden("You do not have permission to view this document.")
        response = FileResponse(open(book.book.path, "rb"))
        response["Content-Disposition"] = f"inline; filename={book.name}"
        response["X-Content-Type-Options"] = "nosniff"
        return response
    except Book.DoesNotExist:
        return HttpResponseForbidden("Book not found.")



class AgentViewSet(viewsets.ModelViewSet):
    queryset = Agent.objects.all()
    serializer_class = AgentSerializer
    
    # def get_permissions (self):
    #     if self.action in ['list', 'retrieve', 'create', 'get', 'add']:
    #         return [AllowAny()]
        

    @action(detail=False, methods=['post'])
    def add(self, request, *args, **kwargs):
        # Your custom logic for 'add' action
        return Response({"status": "add endpoint hit"})