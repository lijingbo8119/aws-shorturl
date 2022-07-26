from django.db import models

# Create your models here.\

class ShortUrlModel(models.Model):
    class Meta:
        db_table = 'short_urls'
    
    long_url = models.CharField(max_length=2048)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "id:{id} url:{url}".format(id = self.id, url = self.long_url)
