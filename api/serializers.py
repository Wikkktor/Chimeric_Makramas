from rest_framework import serializers
from .models import MakramaPost


class MakramaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MakramaPost
        fields = '__all__'
