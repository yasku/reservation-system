# Generated by Django 5.1.3 on 2024-11-20 19:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("reservations", "0004_remove_reservation_confirmed"),
    ]

    operations = [
        migrations.AddField(
            model_name="reservation",
            name="time_slot",
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
    ]