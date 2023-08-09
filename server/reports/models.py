from django.db import models
from django.utils import timezone

# Create your models here.


class Emergency (models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    latitude = models.DecimalField(
        null=True, blank=True, max_digits=10, decimal_places=6)
    longitude = models.DecimalField(
        null=True, blank=True, max_digits=10, decimal_places=6)
    type = models.ForeignKey('Emergency_Type', related_name="emergency",
                             on_delete=models.PROTECT, null=True, blank=True)
    status = models.BooleanField(default=False)
    time = models.DateTimeField(default=timezone.now)
    institution = models.ForeignKey(
        'Institution', related_name="emergency", on_delete=models.PROTECT, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Emergencies'


class Emergency_Type (models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Emergency Types'


class Institution (models.Model):
    name = models.CharField(max_length=100)
    latitude = models.DecimalField(
        null=True, blank=True, max_digits=10, decimal_places=6)
    longitude = models.DecimalField(
        null=True, blank=True, max_digits=10, decimal_places=6)
    type = models.ForeignKey(
        'Emergency_Type', on_delete=models.PROTECT, null=True)
    number = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Institutions'
