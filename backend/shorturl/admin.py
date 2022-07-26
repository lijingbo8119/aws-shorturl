from django.contrib import admin

# Register your models here.

from .models import ShortUrlModel

admin.site.register(ShortUrlModel)