# Generated by Django 5.1.4 on 2024-12-11 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docs', '0002_bookcategory_alter_messages_status_book'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cases',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('date_created', models.DateField(auto_now_add=True)),
                ('file_path', models.FileField(upload_to='cases/files/')),
                ('category', models.CharField(choices=[('Criminal', 'Criminal'), ('Civil', 'Civil'), ('Administrative', 'Administrative'), ('Othe', 'Other')], default='Other', max_length=14)),
            ],
        ),
    ]