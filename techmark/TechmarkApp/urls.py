from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('index.html', index, name='index'),
    path('login.html', login, name='login'),
    path('signup.html', signup, name='signup'),
    path('email-campaigns.html', emailcampaigns, name='email-campaigns'),
    path('faqs.html', faqs, name='faqs'),
    path('pricing.html', pricing, name='pricing'),
    path('settings.html', settings, name='settings'),
    path('add-campaign.html', addcampaign, name='add-campaign'),
    path('auth-500.html', auth500, name='auth-500'),
    path('auth-offline.html', authoffline, name='auth-offline'),
    path('auth-success.html', authsuccess, name='auth-success'),
    path('logout.html', logout, name='logout')
]
