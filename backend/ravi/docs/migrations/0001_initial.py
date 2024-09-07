# Generated by Django 5.1.1 on 2024-09-05 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('publication', models.FileField(blank=True, null=True, upload_to='attachments/')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('last_update', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]