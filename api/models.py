from django.db import models


class MakramaPost(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    photo = models.ImageField(upload_to='makrama_images')
    available = models.BooleanField(default=True)
