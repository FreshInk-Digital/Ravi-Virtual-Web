from django.contrib import admin
from .models import Publication, Messages, BookCategory, Book, Cases
from import_export.admin import ImportExportModelAdmin
import os
from django.core.files import File

# --- Book Category Admin ---
@admin.register(BookCategory)
class BookCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

# --- Book Admin ---
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'sensitivity', 'date_created', 'last_update', 'year')
    search_fields = ('name', 'description')
    list_filter = ('date_created', 'last_update')
    readonly_fields = ('date_created', 'last_update')

# --- Publication Admin ---
@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'date_created', 'last_update')
    search_fields = ('name', 'description')
    list_filter = ('date_created', 'last_update')
    readonly_fields = ('date_created', 'last_update')

# --- Messages Admin ---
@admin.register(Messages)
class MessagesAdmin(admin.ModelAdmin):
    list_display = (
        'user_name', 'email', 'phone',
        'collaborator_name', 'location', 'collaborator_phone',
        'message', 'status'
    )
    search_fields = ('user_name', 'email', 'collaborator_name')
    list_filter = ('date_created',)
    readonly_fields = ('date_created',)

# --- Cases Admin with Import/Export ---
@admin.register(Cases)
class CasesAdmin(ImportExportModelAdmin):
    list_display = ('case_code', 'case_number', 'appellant', 'respondent', 'court', 'date_created')
    search_fields = ('case_code', 'appellant', 'respondent', 'court', 'description')

    def import_action(self, request, *args, **kwargs):
        response = super().import_action(request, *args, **kwargs)

        if request.method == 'POST' and 'file' in request.FILES:
            csv_file = request.FILES['file']
            csv_file_path = csv_file.temporary_file_path()
            base_directory = os.path.dirname(csv_file_path)

            for case in Cases.objects.all():
                if case.file_path:
                    absolute_file_path = os.path.join(base_directory, case.file_path.name)
                    if os.path.exists(absolute_file_path):
                        with open(absolute_file_path, 'rb') as f:
                            django_file = File(f)
                            case.file_path.save(os.path.basename(case.file_path.name), django_file, save=True)
                        print(f"File saved: {case.file_path.name}")
                    else:
                        print(f"File not found: {absolute_file_path}")
        return response
