from django.shortcuts import render
import json
from django.http import JsonResponse

# Create your views here.

with open('static/json/data.json', encoding='utf-8') as file:
        data = json.load(file)
        initial_data = data[:6] #loading first six set of data

def index(request):
    return render(request, 'index.html', {'data': data, 'initial_data': initial_data})

def content(request, pk):
    pk = int(pk) 
    job = data[pk-1]
    return render(request, 'content.html', {'job': job})

def loadmore(request):
     print('load more function called')
     lastJobIndex = int(request.GET.get('lastJobIndex', 6))
     if lastJobIndex >= len(data):
          print('data length is',len(initial_data))
          print('lastjobIndex is', lastJobIndex)
          return JsonResponse([], safe=False)
     endIndex = -1
     moreData = data[lastJobIndex:endIndex]
     return JsonResponse(moreData, safe=False)