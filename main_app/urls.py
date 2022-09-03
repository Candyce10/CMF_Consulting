from django.urls import path
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name="home"),
    path('about/', views.About.as_view(), name="about"),
    path('contact/', views.Contact.as_view(), name="contact"),
    path('services/', views.Services.as_view(), name="services"),
    path('workshops/', views.Workshops.as_view(), name="workshops"),
    path('testimonials/', views.Testimonials.as_view(), name="testimonials"),
    
]