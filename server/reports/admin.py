from django.contrib import admin
from .models import Emergency , Emergency_Type , Institution

# Register your models here.

admin.site.register(Emergency)
admin.site.register(Emergency_Type)
admin.site.register(Institution)