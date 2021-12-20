from django.urls import path
from . import views
urlpatterns = [
    path('', views.api_overview, name="api-overview"),
    path('makrama-list/', views.makrama_list, name='makrama-list'),
    path('makrama-detail/<str:pk>', views.makrama_detail, name='makrama-detail'),
    path('makrama-create/', views.makrama_create, name='makrama-create'),

]
