from django.shortcuts import render
import json

# Create your views here.

with open('static/json/data.json', encoding='utf-8') as file:
        data = json.load(file)

def index(request):
    return render(request, 'index.html', {'data': data})

def content(request, pk):
    pk = int(pk) 
    job = data[pk-1]
    return render(request, 'content.html', {'job': job})