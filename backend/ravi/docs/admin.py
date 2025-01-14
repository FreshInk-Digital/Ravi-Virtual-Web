from django.contrib import admin
from .models import Publication, Messages, BookCategory, Book, Cases, Agent

# Customize the Book Category admin
class BookCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', )  # Display these fields in the list view
    search_fields = ('name', )  # Add a search bar for 'name' and 'description'
    
# Customize the Book admin
class BookAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'sensitivity', 'date_created', 'last_update')  # Display these fields in the list view
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
class CasesAdmin(admin.ModelAdmin):
    list_display = ('case_number', 'plaintiff', 'defendant', 'date_created')  # Display these fields in the list view
    search_fields = ('case_number', 'plaintiff', 'defendant', 'description')  # Enable search on these fields


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