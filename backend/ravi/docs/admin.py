from django.contrib import admin
from .models import Publication, Messages

# Customize the Publication admin
class PublicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'date_created', 'last_update')  # Display these fields in the list view
    search_fields = ('name', 'description')  # Add a search bar for 'name' and 'description'
    list_filter = ('date_created', 'last_update')  # Add filter options for date_created and last_update
    readonly_fields = ('date_created', 'last_update')  # Make date fields read-only

# Customize the Messages admin
class MessagesAdmin(admin.ModelAdmin):
    list_display = ('user_name', 'email', 'message', 'date_created')  # Display these fields in the list view
    search_fields = ('user_name', 'email')  # Add a search bar for 'user_name' and 'email'
    list_filter = ('date_created',)  # Add a filter for date_created
    readonly_fields = ('date_created',)  # Make date_created read-only

# Register the models with the custom admin classes
admin.site.register(Publication, PublicationAdmin)
admin.site.register(Messages, MessagesAdmin)
