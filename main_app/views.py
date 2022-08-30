from django.shortcuts import render
from django.views import View 
from django.http import HttpResponse
from django.views.generic.base import TemplateView


class Home(View):
    def get(self, request):
        return HttpResponse("CMF Home")

class Home(TemplateView):
    template_name = "home.html"


class About(View):
    def get(self, request):
        return HttpResponse("CMF About")

class About(TemplateView):
    template_name = "about.html"


class Services(View):
    def get(self, request):
        return HttpResponse("CMF Services")

class Services(TemplateView):
    template_name = "services.html"


class Workshops(View):
    def get(self, request):
        return HttpResponse("CMF Workshops")

class Workshops(TemplateView):
    template_name = "workshops.html"


class Contact(View):
    def get(self, request):
        return HttpResponse("CMF Contact")

class Contact(TemplateView):
    template_name = "contact.html"


class Testimonials(View):
    def get(self, request):
        return HttpResponse("CMF Testimonials")

class Testimonials(TemplateView):
    template_name = "testimonials.html"