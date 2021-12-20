from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import MakramaPost


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'list': '/makrama-list/',
        'Detail View': '/makrama-detail/<str:pk>/',
        'Create': '/makrama-create/',
        'Update': '/makrama-update/<str:pk>/',
        'Delete': '/makrama-delete/<str:pk>/',
    }
    return Response(api_urls)
