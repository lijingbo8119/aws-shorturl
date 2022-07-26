from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import ShortUrlModel
from django.shortcuts import get_object_or_404
import json

def create(request):
    body_unicode = request.body.decode('utf-8') 	
    body = json.loads(body_unicode) 	
    longUrl = body['long_url']
    instance = ShortUrlModel(long_url=longUrl)
    instance.save()
    return JsonResponse({
        "id": instance.id,
        "long_url": instance.long_url,
        "created_at": instance.created_at,
    })

def show(request, id):
    instance = ShortUrlModel.objects.get(pk=id)
    return JsonResponse({
        "id": instance.id,
        "long_url": instance.long_url,
        "created_at": instance.created_at,
    })
