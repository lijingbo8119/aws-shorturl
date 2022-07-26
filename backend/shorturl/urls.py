from django.urls import path

from . import apis

urlpatterns = [
    # path('', views.index, name='index'),
    path('', apis.create, name='create'),
    path('<int:id>', apis.show, name='show'),
]