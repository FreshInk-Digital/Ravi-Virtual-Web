from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Customizing the Django Admin interface
admin.site.site_header = "Ravi Moova Admin"
admin.site.site_title = "Ravi Moova Admin Portal"
admin.site.index_title = "Welcome to Ravi Moova Admin Dashboard"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('docs.urls')),
]

# Serving static and media files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
