import base64
import json
import logging
import os
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


logger = logging.getLogger(__name__)


def _normalized_tanzanian_phone(phone):
    digits = ''.join(character for character in str(phone) if character.isdigit())
    if digits.startswith('0'):
        digits = digits[1:]
    if not digits.startswith('255'):
        digits = f'255{digits}'
    return digits


def _send_message(message, recipients):
    api_key = os.getenv('BEEM_API_KEY')
    secret_key = os.getenv('BEEM_SECRET_KEY')
    source_address = os.getenv('BEEM_SOURCE_ADDRESS', 'RAVIAPP')
    api_url = os.getenv('BEEM_API_URL', 'https://apisms.beem.africa/v1/send')

    if not api_key or not secret_key:
        logger.warning('SMS was not sent because Beem credentials are not configured.')
        return False

    credentials = base64.b64encode(f'{api_key}:{secret_key}'.encode()).decode()
    payload = {
        'source_addr': source_address,
        'schedule_time': '',
        'encoding': 0,
        'message': message,
        'recipients': [
            {'recipient_id': index, 'dest_addr': recipient}
            for index, recipient in enumerate(recipients, start=1)
        ],
    }
    request = Request(
        api_url,
        data=json.dumps(payload).encode(),
        headers={
            'Authorization': f'Basic {credentials}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        with urlopen(request, timeout=10) as response:
            return 200 <= response.status < 300
    except (HTTPError, URLError, TimeoutError, OSError):
        logger.exception('The SMS provider request failed.')
        return False


def _admin_recipients():
    return [
        _normalized_tanzanian_phone(phone)
        for phone in os.getenv('BEEM_ADMIN_RECIPIENTS', '').split(',')
        if phone.strip()
    ]


def send_contact_notifications(message):
    recipients = _admin_recipients()
    admin_sent = False
    if recipients:
        admin_sent = _send_message(
            'Customer details\n'
            f'Name: {message.user_name}\n'
            f'Email: {message.email}\n'
            f'Phone: {_normalized_tanzanian_phone(message.phone)}\n'
            f'Message: {message.message}\n'
            f'Status: {message.status}',
            recipients,
        )

    confirmation_sent = _send_message(
        f'Dear {message.user_name}, thank you for contacting RAVI. '
        'Your request has been received and we will contact you soon.',
        [_normalized_tanzanian_phone(message.phone)],
    )
    return admin_sent and confirmation_sent


def send_collaborator_notifications(message):
    recipients = _admin_recipients()
    admin_sent = False
    if recipients:
        admin_sent = _send_message(
            'Collaborator details\n'
            f'Name: {message.collaborator_name}\n'
            f'Tax Region: {message.location}\n'
            f'Phone: {_normalized_tanzanian_phone(message.collaborator_phone)}\n'
            f'Message: {message.message}\n'
            f'Status: {message.status}',
            recipients,
        )

    confirmation_sent = _send_message(
        f'Dear {message.collaborator_name}, thank you for contacting RAVI. '
        'We have received your submission and will follow up shortly.',
        [_normalized_tanzanian_phone(message.collaborator_phone)],
    )
    return admin_sent and confirmation_sent
