from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

# Create a router and register your viewsets
router = DefaultRouter()
router.register(r'Book', views.BookViewSet, basename='book')
router.register(r'book-categories', views.BookCategoryViewSet, basename='bookcategory')
router.register(r'Publication', views.PublicationViewSet, basename='publication')
router.register(r'ContactMessages', views.ContactMessagesViewSet, basename='contact-messages')
router.register(r'CollaboratorMessages', views.CollaboratorMessagesViewSet, basename='collaborator-messages')
router.register(r'Cases', views.CasesViewSet, basename='cases')
router.register(r'Collaborator', views.CollaboratorViewSet, basename='collaborator')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]