from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response([{"api"}])

@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def get_note(request, pk):
    # param = request.GET.get('id')
    notes = Note.objects.get(id=pk)
  
    serializer = NoteSerializer(notes, many=False)
    if serializer.is_valid():
        return Response(serializer.data)
    else:
        raise Exception("This note does not exist")

@api_view(['PUT'])   
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, many=False, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        raise Exception("This note does not exist")