
from django.contrib import admin
from .models import Reservation

@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'reservation_date', 'phone_number', 'guests_count')
    search_fields = ('customer_name', 'customer_email')
    list_filter = ('reservation_date',)
