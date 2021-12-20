from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import MakramaPost
from .serializers import MakramaSerializer


@api_view(['GET'])
def api_overview(request):
    """
    Overview of the api paths
    :param request:
    :return: Dict with the paths
    """
    api_urls = {
        'list': '/makrama-list/',
        'Detail View': '/makrama-detail/<str:pk>/',
        'Create': '/makrama-create/',
        'Update': '/makrama-update/<str:pk>/',
        'Delete': '/makrama-delete/<str:pk>/',
    }
    return Response(api_urls)


@api_view(['GET'])
def makrama_list(request):
    makramas = MakramaPost.objects.all().order_by('-id')
    serializer = MakramaSerializer(makramas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def makrama_detail(request, pk):
    makrama = MakramaPost.objects.get(id=pk)
    serializer = MakramaSerializer(makrama, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def makrama_create(request):
    serializer = MakramaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
