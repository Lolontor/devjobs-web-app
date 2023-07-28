from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('content/<str:pk>', views.content, name='content'),
    path('loadmore/', views.loadmore, name='loadmore'),
    path('searchfilter/', views.searchfilter, name='searchfilter'),
    
]