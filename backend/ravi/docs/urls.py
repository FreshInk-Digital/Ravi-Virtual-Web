from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register your viewsets
router = DefaultRouter()
router.register(r'Publication', views.PublicationViewSet, basename='publication')
router.register(r'Messages', views.MessagesViewSet, basename='messages')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]