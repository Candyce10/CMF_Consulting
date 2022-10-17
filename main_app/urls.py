from django.urls import path
from . import views

urlpatterns = [
    # path('', views.Home.as_view(), name="home"),
    # path('about/', views.About.as_view(), name="about"),
    # path('contact/', views.Contact.as_view(), name="contact"),
    # path('services/', views.Services.as_view(), name="services"),
    # path('workshops/', views.Workshops.as_view(), name="workshops"),
    # path('testimonials/', views.Testimonials.as_view(), name="testimonials"),
    path('', views.Construction.as_view(), name="construction"),
    path('es/', views.ConstructionEs.as_view(), name="construction_es"),
    
]