from django.contrib import admin
from .models import Publication, Messages, BookCategory, Book, Cases, Agent
from import_export.admin import ImportExportModelAdmin
import os
from django.core.files import File

# Customize the Book Category admin
class BookCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )  # Display these fields in the list view
    search_fields = ('name', )  # Add a search bar for 'name' and 'description'
    
# Customize the Book admin
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'sensitivity', 'date_created', 'last_update', 'year')  # Display these fields in the list view
    search_fields = ('name', 'description')  # Add a search bar for 'name' and 'description'
    list_filter = ('date_created', 'last_update')  # Add filter options for date_created and last_update
    readonly_fields = ('date_created', 'last_update')  # Make date fields read-only

# Customize the Publication admin
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'date_created', 'last_update')  # Display these fields in the list view
    search_fields = ('name', 'description')  # Add a search bar for 'name' and 'description'
    list_filter = ('date_created', 'last_update')  # Add filter options for date_created and last_update
    readonly_fields = ('date_created', 'last_update')  # Make date fields read-only

# Customize the Messages admin
class MessagesAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'email','phone', 'agent_code', 'location', 'agent_phone', 'message', 'status')  # Display these fields in the list view
    search_fields = ('user_name', 'email')  # Add a search bar for 'user_name' and 'email'
    list_filter = ('date_created',)  # Add a filter for date_created
    readonly_fields = ('date_created',)  # Make date_created read-only

# Customize the Messages admin
# class CasesAdmin(ImportExportModelAdmin):
#     list_display = ('case_code', 'appellant', 'respondent', 'court', 'date_created')  # Display these fields in the list view
#     search_fields = ('case_code', 'appellant', 'respondent', 'court', 'description')  # Enable search on these fields

class CasesAdmin(ImportExportModelAdmin):
    list_display = ('case_code', 'appellant', 'respondent', 'court', 'date_created')  # Display these fields in the list view
    search_fields = ('case_code', 'appellant', 'respondent', 'court', 'description')  # Enable search on these fields

    def import_action(self, request, *args, **kwargs):
        """
        Override the import action to handle file uploads after importing the CSV.
        """
        # Call the original import action
        response = super().import_action(request, *args, **kwargs)

        # Process file uploads after import
        if request.method == 'POST' and 'file' in request.FILES:
            csv_file = request.FILES['file']

            # Get the directory of the uploaded CSV file
            csv_file_path = csv_file.temporary_file_path()  # Path to the temporary uploaded CSV file
            base_directory = os.path.dirname(csv_file_path)  # Extract the directory

            # Loop through all Cases objects
            for case in Cases.objects.all():
                if case.file_path:  # Check if the file_path field is populated
                    # Construct the absolute file path
                    absolute_file_path = os.path.join(base_directory, case.file_path.name)

                    # Check if the file exists
                    if os.path.exists(absolute_file_path):
                        # Open the file and save it to the `file_path` field
                        with open(absolute_file_path, 'rb') as f:
                            django_file = File(f)
                            # Save the file to the /media/cases/files/ directory
                            case.file_path.save(os.path.basename(case.file_path.name), django_file, save=True)
                        print(f"File saved: {case.file_path.name}")
                    else:
                        print(f"File not found: {absolute_file_path}")
        return response
    
class AgentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'agent_code','phone', 'email', 'get_region_display', )
    search_fields = ('first_name', 'region')

    def get_region_display(self, obj):
        return obj.get_region_display()
    
    get_region_display.short_description = 'Region'


# Register the models with the custom admin classes
admin.site.register(Publication, PublicationAdmin)
admin.site.register(Messages, MessagesAdmin)
admin.site.register(BookCategory, BookCategoryAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Cases, CasesAdmin)
admin.site.register(Agent, AgentAdmin)