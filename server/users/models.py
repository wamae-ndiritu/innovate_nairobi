from django.db import models
from django.contrib.auth.models import User
from reports.models import Institution

# Create your models here.

class Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)
    institution = models.ForeignKey(Institution, on_delete=models.PROTECT, null=True, related_name="profile")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Profiles'