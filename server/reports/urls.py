from django.urls import path, include

from . import views

urlpatterns = [
    path('emergency/', views.EmergencyList.as_view()),
    path('institution/', views.InstitutionList.as_view()),
    path('emergency-type/', views.EmergencyType.as_view()),
    path('test/<int:emergency_type_id>/',
         views.NearestInstitutionView.as_view()),

]
