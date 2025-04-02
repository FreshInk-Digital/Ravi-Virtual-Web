from django.contrib.auth.models import User
from rest_framework import viewsets, status, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Publication, Messages, Book, BookCategory, Cases, Agent
from .serializers import PublicationSerializer, MessagesSerializer, CasesSerializer, BookSerializer, BookCategorySerializer, AgentSerializer
from django.http import FileResponse, HttpResponseForbidden
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
import csv
import io

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
    parser_classes = (MultiPartParser, FormParser)  # Support file upload

    @action(detail=False, methods=['post'], url_path='bulk-import')
    def bulk_import(self, request):
        """Custom action to handle bulk CSV import."""
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Read the CSV file
        data_set = file.read().decode('utf-8')
        io_string = io.StringIO(data_set)
        reader = csv.DictReader(io_string)

        cases_list = []
        errors = []
        for row in reader:
            try:
                # Create a new case from CSV data
                case = Cases(
                    case_number=row.get('case_number'),
                    case_code=row.get('case_code'),
                    appellant=row.get('appellant'),
                    respondent=row.get('respondent'),
                    description=row.get('description'),
                    court=row.get('court'),
                    tax_type=row.get('tax_type'),
                    tax_court=row.get('tax_court'),
                    originating_cases=row.get('originating_cases'),
                    year=int(row.get('year', 0)),  # Convert to integer
                )
                cases_list.append(case)
            except Exception as e:
                errors.append({"row": row, "error": str(e)})

        # Bulk create cases
        if cases_list:
            Cases.objects.bulk_create(cases_list)

        return Response(
            {
                "success": f"{len(cases_list)} cases imported successfully",
                "errors": errors
            },
            status=status.HTTP_201_CREATED if cases_list else status.HTTP_400_BAD_REQUEST
        )

    
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