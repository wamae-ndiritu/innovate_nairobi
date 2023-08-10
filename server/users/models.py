from django.db import models
from django.contrib.auth.models import User
from reports.models import Institution

# Create your models here.


class Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)
    institution = models.ForeignKey(
        Institution, on_delete=models.PROTECT, null=True, blank=True, related_name="profile")
    number = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'Profiles'
