from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views
# from django.conf.urls.defaults import *
from wkhtmltopdf.views import PDFTemplateView

urlpatterns = [
    path('', views.home, name="home"),
#     path('Registration', views.registration, name="registration"),
    path('Dataform', views.dataform, name="dataform"),
    path('Contact_us', views.contact_us, name="contact_us"),
    path('about_us', views.about_us, name="about_us"),
    path('FAQ', views.FAQ, name="FAQ"),
#     path('register', views.addFarmer, name='register'),
#     path('authenticate', views.loginAuthentication, name='authenticate'),
    path('prediction/', views.predict_using_decision_tree, name="predict"),
    path('contact/', views.contact_Us, name='contact'),
    path('pdf/', views.reportGenerate, name='pdf'),

]