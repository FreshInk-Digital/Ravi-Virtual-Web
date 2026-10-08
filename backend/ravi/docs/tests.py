from unittest.mock import patch

from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase


class PublicApiPermissionTests(APITestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='admin-test',
            password='test-password',
        )

    def test_cases_are_publicly_readable_but_not_writable(self):
        list_response = self.client.get('/Cases/')
        create_response = self.client.post('/Cases/', {}, format='multipart')

        self.assertEqual(list_response.status_code, status.HTTP_200_OK)
        self.assertEqual(create_response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_health_check_includes_database_connectivity(self):
        response = self.client.get('/health/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {'status': 'ok'})

    @patch('docs.views.send_contact_notifications')
    def test_contact_message_can_be_created_but_not_listed_anonymously(self, send_sms):
        create_response = self.client.post(
            '/ContactMessages/',
            {
                'user_name': 'Test User',
                'email': 'test@example.com',
                'phone': '712345678',
                'message': 'Please contact me.',
                'status': 'NORMAL',
            },
            format='json',
        )
        list_response = self.client.get('/ContactMessages/')

        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(list_response.status_code, status.HTTP_401_UNAUTHORIZED)
        send_sms.assert_called_once()

    @patch('docs.views.send_collaborator_notifications')
    def test_collaborator_message_can_be_created_but_not_listed_anonymously(self, send_sms):
        create_response = self.client.post(
            '/CollaboratorMessages/',
            {
                'collaborator_name': 'Test Collaborator',
                'location': 'Dar es Salaam',
                'collaborator_phone': '712345678',
                'message': 'I would like to collaborate.',
                'status': 'NORMAL',
            },
            format='json',
        )
        list_response = self.client.get('/CollaboratorMessages/')

        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(list_response.status_code, status.HTTP_401_UNAUTHORIZED)
        send_sms.assert_called_once()

    def test_authenticated_user_can_list_messages(self):
        self.client.force_authenticate(self.user)

        response = self.client.get('/ContactMessages/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
