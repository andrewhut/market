from django.shortcuts import render_to_response, render, redirect
from django.contrib import auth
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from .models import *

def home(request):
    if request.user:
        user = request.user
    template_data = {'user':user}
    return render_to_response("market/others/home.html", template_data)

def logout(request):
    auth.logout(request)
    return redirect('/')
