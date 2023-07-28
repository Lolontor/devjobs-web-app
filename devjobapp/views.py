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

def searchfilter(request):
    # Get the search parameters from the request
    search_query = request.GET.get('q', '').lower()
    location = request.GET.get('location', '').lower()
    jobtype = request.GET.get('jobtype', '').lower()
    print('Search Query:', search_query)
    print('Location:', location)
    print('Full Time:', jobtype)
    print(type(jobtype))

    
         

    filtered_jobs = []
    if jobtype:
     print('in the if condition')
     for job in data:
          print(job['contract'].lower() == jobtype)
          if job['contract'].lower() == jobtype:
               print('jobs gotten')
               if job['position'].lower() == search_query or job['company'].lower() == search_query:
                print(job['position'])
                if job['location'].lower() == location:
                 filtered_jobs.append(job)
    elif not jobtype:
        for job in data:
         if job['position'].lower() == search_query or job['company'].lower() == search_query and job['location'].lower() == location:
          filtered_jobs.append(job)
         if job['location'].lower() == location:
          filtered_jobs.append(job)
          print('hello not full time')
    #for job in data:
        #job_title = job['position'].lower()
        #job_company = job['company'].lower()
        #job_location = job['location'].lower()

        # Check if the job matches the search criteria
        #title_company_matches = search_query in job_title or search_query in job_company
        #location_matches = location in job_location
        #jobtype_matches = 'full time' if fulltime else 'part time'
        #print(title_company_matches)
        #print(location_matches)
        #print(jobtype_matches)

        # Perform filtering based on the search parameters
        #if (not search_query or title_company_matches) and (not location or location_matches) and (not fulltime or job['contract'].lower() == jobtype_matches):
            #filtered_jobs.append(job)
    
    print(filtered_jobs)
    return JsonResponse(filtered_jobs, safe=False)
