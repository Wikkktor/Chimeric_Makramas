from django.db import models


class MakramaPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    photo = models.ImageField(height_field=500, width_field=500)