# Generated by Django 4.2.4 on 2023-08-09 05:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='emergency',
            name='location',
        ),
        migrations.RemoveField(
            model_name='institution',
            name='location',
        ),
        migrations.AddField(
            model_name='emergency',
            name='latitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=6, null=True),
        ),
        migrations.AddField(
            model_name='emergency',
            name='longitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=6, null=True),
        ),
        migrations.AddField(
            model_name='institution',
            name='latitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=6, null=True),
        ),
        migrations.AddField(
            model_name='institution',
            name='longitude',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=6, null=True),
        ),
        migrations.AlterField(
            model_name='emergency',
            name='name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='emergency',
            name='type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='emergency', to='reports.emergency_type'),
        ),
    ]
