from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.http import FileResponse, HttpResponseForbidden, Http404
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
import csv
import io
import os
import mimetypes


from .models import Book, BookCategory, Publication, Messages, Cases
from docs.serializers import (
    BookSerializer, BookCategorySerializer,
    PublicationSerializer, ContactMessagesSerializer,
    CollaboratorMessagesSerializer, CasesSerializer
)

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def get_permissions(self):
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

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]

class ContactMessagesViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    serializer_class = ContactMessagesSerializer
    permission_classes = [AllowAny]

class CollaboratorMessagesViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    serializer_class = CollaboratorMessagesSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class CasesViewSet(viewsets.ModelViewSet):
    queryset = Cases.objects.all()
    serializer_class = CasesSerializer
    permission_classes = [AllowAny]
    parser_classes = (MultiPartParser, FormParser)

    @action(detail=False, methods=['post'], url_path='bulk-import')
    def bulk_import(self, request):
        file = request.FILES.get('file')
        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)

        data_set = file.read().decode('utf-8')
        io_string = io.StringIO(data_set)
        reader = csv.DictReader(io_string)

        cases_list = []
        errors = []
        for row in reader:
            try:
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
                    year=int(row.get('year', 0)),
                )
                cases_list.append(case)
            except Exception as e:
                errors.append({"row": row, "error": str(e)})

        if cases_list:
            Cases.objects.bulk_create(cases_list)

        return Response(
            {
                "success": f"{len(cases_list)} cases imported successfully",
                "errors": errors
            },
            status=status.HTTP_201_CREATED if cases_list else status.HTTP_400_BAD_REQUEST
        )
    
    @action(detail=True, methods=['get'], url_path='stream', permission_classes=[AllowAny])
    def stream_file(self, request, pk=None):
        case = self.get_object()

        if not case.file_path:
            return Response({"error": "No file associated with this case."}, status=404)

        file_path = case.file_path.path
        if not os.path.exists(file_path):
            return Response({"error": "File not found on server."}, status=404)

        # Set correct MIME type
        mime_type, _ = mimetypes.guess_type(file_path)
        if not mime_type:
            mime_type = 'application/pdf'  # Force if unknown

        try:
            response = FileResponse(open(file_path, "rb"), content_type=mime_type)
            response["Content-Disposition"] = f'inline; filename="{os.path.basename(file_path)}"'
            response["X-Content-Type-Options"] = "nosniff"
            response["Cache-Control"] = "no-store"
            response["Access-Control-Allow-Origin"] = request.headers.get("Origin", "*")  # <-- CORS HEADER
            return response
        except Exception as e:
            raise Http404("Failed to read the file.")

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
    

