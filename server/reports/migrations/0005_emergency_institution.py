# Generated by Django 4.2.4 on 2023-08-09 07:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0004_alter_institution_latitude_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='emergency',
            name='institution',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='emergency', to='reports.institution'),
        ),
    ]
