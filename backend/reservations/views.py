from django.shortcuts import render
from rest_framework import viewsets
from .models import Reservation
from .serializers import ReservationSerializer
from django.http import HttpResponse

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    
def home(request):
    return HttpResponse("<h1>Welcome to the Restaurant Reservation System!</h1>")