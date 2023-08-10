from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response([{"api"}])

@api_view(['GET'])
def get_notes(request):
    return Response('Notes')