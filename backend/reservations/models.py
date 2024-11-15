from django.db import models

class Reservation(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField(max_length=100)  # New field for email
    phone_number = models.CharField(max_length=15)  # New field for phone number
    reservation_date = models.DateTimeField()
    guests_count = models.PositiveIntegerField()
    special_request = models.TextField(blank=True, null=True)
    