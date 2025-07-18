from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

class BookCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "BookCategory"

class Book(models.Model):    
    CURRENT_YEAR = datetime.now().year
    YEAR_CHOICES = [(year, str(year)) for year in range(1960, CURRENT_YEAR + 1)]

    book = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(BookCategory, on_delete=models.CASCADE, related_name="books")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="books")
    year = models.IntegerField(choices=YEAR_CHOICES, default=CURRENT_YEAR)

    SENSITIVITY_CHOICES = [
        ('critical', 'critical'),
        ('not_critical', 'Not Critical'),
    ]
    sensitivity = models.CharField(max_length=20, choices=SENSITIVITY_CHOICES, default='not_critical')

    def __str__(self):
        return self.name

class Publication(models.Model):
    publication = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="publications")

    def __str__(self):
        return self.name

class Messages(models.Model):
    URGENT = 'URGENT'
    NORMAL = 'NORMAL'
    NOT_URGENT = 'NOT URGENT'

    STATUS_CHOICES = [
        (URGENT, 'Urgent'),
        (NORMAL, 'Normal'),
        (NOT_URGENT, 'Not Urgent'),
    ]

    user_name = models.CharField(max_length=255, default="")
    email = models.EmailField(max_length=255, default="")
    phone = models.CharField(max_length=255, default="")
    collaborator_name = models.CharField(max_length=255, default="")
    location = models.CharField(max_length=255, default="")
    collaborator_phone = models.CharField(max_length=255, default="")
    message = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default=NOT_URGENT,
    )

    def __str__(self):
        return self.user_name

    class Meta:
        verbose_name_plural = 'Messages'

class Cases(models.Model):
    TAX_TYPE_CHOICES = [
        ('Income Tax', 'Income Tax'),
        ('Value Added Tax', 'Value Added Tax'),
        ('Excise Duty', 'Excise Duty'),
        ('Import Duty', 'Import Duty'),
        ('Skills and Development Levy', 'Skills and Development Levy'),
        ('Airport Departure Charges', 'Airport Departure Charges'),
        ('Port Departure Charges', 'Port Departure Charges'),
        ('Stamp Duty', 'Stamp Duty'),
        ('Other', 'Other'),
    ]

    TAX_COURT_CHOICES = [
        ('Tax Revenue Appeals Board', 'Tax Revenue Appeals Board'),
        ('Tax Revenue Appeals Tribunal', 'Tax Revenue Appeals Tribunal'),
        ('Court of Appeal of Tanzania', 'Court of Appeal of Tanzania'),
        ('High Court of Tanzania', 'High Court of Tanzania'),
    ]

    COURT_CHOICES = [
        ('TRAB', 'TRAB'),
        ('TRAT', 'TRAT'),
        ('CAT', 'CAT'),
        ('HCT', 'HCT'),
        ('UGANDA SUPREME COURT', 'UGANDA SUPREME COURT'),
        ('KENYA SUPREME COURT', 'KENYA SUPREME COURT'),
        ('UK SUPREME COURT', 'UK SUPREME COURT'),
        ('INDIA SUPREME COURT', 'INDIA SUPREME COURT'),
        ('AUSTRALIA SUPREME COURT', 'AUSTRALIA SUPREME COURT'),
    ]

    CURRENT_YEAR = datetime.now().year
    YEAR_CHOICES = [(year, str(year)) for year in range(1960, CURRENT_YEAR + 1)]

    case_code = models.CharField(max_length=20, null=True)
    case_number = models.CharField(max_length=20, null=True)
    appellant = models.CharField(max_length=255, null=True)
    respondent = models.CharField(max_length=255, null=True)
    description = models.TextField(max_length=500, null=True)
    court = models.CharField(max_length=30, choices=COURT_CHOICES, null=True)
    tax_type = models.CharField(max_length=30, choices=TAX_TYPE_CHOICES, null=True)
    tax_court = models.CharField(max_length=50, choices=TAX_COURT_CHOICES, null=True)
    originating_cases = models.TextField(max_length=255, null=True)
    year = models.IntegerField(choices=YEAR_CHOICES, default=CURRENT_YEAR)
    date_created = models.DateField(auto_now_add=True)
    file_path = models.FileField(upload_to='cases/files/')

    def __str__(self):
        return self.case_number or "Unnamed Case"
