# Generated by Django 5.1.3 on 2024-11-13 04:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("reservations", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="reservation",
            name="customer_email",
            field=models.EmailField(default="unknown@example.com", max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="reservation",
            name="phone_number",
            field=models.CharField(default="0000000000", max_length=15),
            preserve_default=False,
        ),
    ]
