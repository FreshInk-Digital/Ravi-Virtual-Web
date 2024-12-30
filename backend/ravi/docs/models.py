from django.db import models
from django.contrib.auth.models import User

class BookCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return (self.name)
    
    class Meta:
        verbose_name_plural = "BookCategory"


class Book(models.Model):    
    book = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(BookCategory, on_delete=models.CASCADE, related_name="books")
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="books")

    SENSITIVITY_CHOICES = [
        ('critical', 'critical'),
        ('not_critical', 'Not Critical'),
    ]
    sensitivity = models.CharField(max_length=20, choices=SENSITIVITY_CHOICES, default='not_critical')
    
    def __str__(self):
        return (self.name)
    
class Publication(models.Model):
    publication = models.FileField(upload_to='attachments/', blank=True, null=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_created = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="publications")

    def __str__(self):
        return (self.name)
    
    
class Messages(models.Model):
    URGENT = 'URGENT'
    NORMAL = 'NORMAL'
    NOT_URGENT = 'NOT URGENT'

    STATUS_CHOICES = [
        (URGENT, 'Urgent'),
        (NORMAL, 'Normal'),
        (NOT_URGENT, 'Not Urgent'),
    ]

    user_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255 )
    phone = models.CharField(max_length=255, default="")
    agent_code = models.CharField(max_length=255, default="")
    location = models.CharField(max_length=255, default="")
    agent_phone = models.CharField(max_length=255, default="")
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
    CATEGORY_CHOICES = [
        ('Criminal', 'Criminal'),
        ('Civil', 'Civil'),
        ('Administrative', 'Administrative'),
        ('Othe', 'Other'),
    ]

    name = models.CharField(max_length=255)  # Case name
    description = models.TextField()  # Case description
    date_created = models.DateField(auto_now_add=True)  # Date created
    file_path = models.FileField(upload_to='cases/files/')  # File associated with the case
    category = models.CharField(max_length=14, choices=CATEGORY_CHOICES, default='Other')  # Category

    def __str__(self):
        return self.name


class Agent(models.Model):
    REGION_CHOICES = [
        ('01', 'Arusha'),
        ('02', 'Dodoma'),
        ('03', 'Geita'),
        ('04', 'Ilala'),
        ('05', 'Iringa'),
        ('06', 'Kagera'),
        ('07', 'Katavi'),
        ('08', 'Kigoma'),
        ('09', 'Kilimanjaro'),
        ('10', 'Kinondoni'),
        ('11', 'Lindi'),
        ('12', 'Manyara'),
        ('13', 'Mara'),
        ('14', 'Mbeya'),
        ('15', 'Morogoro'),
        ('16', 'Mtwara'),
        ('17', 'Mwanza'),
        ('18', 'Njombe'),
        ('19', 'Pemba North'),
        ('20', 'Pemba South'),
        ('21', 'Pwani'),
        ('22', 'Rukwa'),
        ('23', 'Ruvuma'),
        ('24', 'Shinyanga'),
        ('25', 'Simiyu'),
        ('26', 'Singida'),
        ('27', 'Songwe'),
        ('28', 'Tabora'),
        ('29', 'Tanga'),
        ('30', 'Temeke'),
        ('31', 'Unguja North'),
        ('32', 'Unguja South'),
        ('33', 'Zanzibar City'),
    ]
    
    region = models.CharField(max_length=2, choices=REGION_CHOICES)
    agent_code = models.CharField(max_length=15, unique=True, null=True, blank=True, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=15, unique=True)
    email = models.EmailField(unique=True)
    
    def save(self, *args, **kwargs):
        if not self.agent_code:
            # Count agents in the same region
            region_agents = Agent.objects.filter(region=self.region).count() + 1
            self.agent_code = f"RV-{self.region}-{region_agents:02d}"
        super().save(*args, **kwargs)

    def __str__(self):
        region_name = dict(self.REGION_CHOICES).get(self.region, "Unknown Region")
        return f"{self.first_name} {self.last_name} ({region_name}) - {self.agent_code}"
