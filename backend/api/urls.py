from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('notes/', views.get_notes, name="notes")
]