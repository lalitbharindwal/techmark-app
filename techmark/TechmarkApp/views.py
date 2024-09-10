from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('index.html')
    context = {
        'firstname': 'Linus',
    }
    return HttpResponse(template.render(context, request))

def login(request):
    return render(request, 'login.html')

def signup(request):
    return render(request, 'signup.html')

def emailcampaigns(request):
    return render(request, 'email-campaigns.html')

def faqs(request):
    return render(request, 'faqs.html')

def pricing(request):
    return render(request, 'pricing.html')

def settings(request):
    return render(request, 'settings.html')

def addcampaign(request):
    return render(request, 'add-campaign.html')

def auth500(request):
    return render(request, 'auth-500.html')

def authoffline(request):
    return render(request, 'auth-offline.html')

def authsuccess(request):
    return render(request, 'auth-success.html')

def logout(request):
    return render(request, 'logout.html')