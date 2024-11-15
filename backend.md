# Backend Setup for Restaurant Reservation System

This guide will walk you through setting up the backend of a restaurant reservation system using Django and PostgreSQL on a Windows system, with Visual Studio Code (VS Code) as the IDE.

## Overview
- **Backend**: Django & PostgreSQL
- **Database**: PostgreSQL
- **IDE**: Visual Studio Code

## Prerequisites
1. **A Windows Computer**
2. **Internet Connection**

Let's get started!

---

## Step 1: Installing Necessary Software

### 1.1 Install Python
1. Go to [Python's official download page](https://www.python.org/downloads/).
2. Download the latest Python version for Windows.
3. Run the installer. Make sure to check the box **“Add Python to PATH”** during installation.

### 1.2 Install PostgreSQL
1. Go to [PostgreSQL download page](https://www.postgresql.org/download/windows/).
2. Download the installer for Windows and run it.
3. During installation, follow these steps:
   - **Choose Components**: Make sure `pgAdmin 4` is selected, along with the main PostgreSQL server.
   - **Set Password**: You will be prompted to set a password for the default PostgreSQL user (`postgres`). **Note this password**, as you will need it for configuring the project.
   - **Default Port**: Keep the default port as `5432` unless you have a specific reason to change it.
   - **Finish Installation**: Complete the installation process.
4. **Verify Installation**:
   - Open **pgAdmin 4** (it may take a moment to load).
   - **Login to pgAdmin** using the password you set during installation.
   - Expand `Servers` > `PostgreSQL` to see if the server is running correctly.

### 1.3 Setting Up PostgreSQL Database for the Project
1. **Create a New Database**:
   - In **pgAdmin 4**, right-click on `Databases` and select **Create** > **Database**.
   - **Name the Database**: Enter `restaurant_db` as the database name.
   - **Owner**: Set the owner to `postgres` (default user).
   - Click **Save** to create the database.

2. **Verify the Database**:
   - Ensure that `restaurant_db` appears under the `Databases` section in pgAdmin.

3. **Configure Connection in Django**:
   - Open the `settings.py` file in the `backend/restaurant` directory.
   - Update the `DATABASES` section to match your PostgreSQL setup:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'restaurant_db',
           'USER': 'postgres',
           'PASSWORD': 'your_password',  # Use the password you set during PostgreSQL installation
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```
   - Replace `'your_password'` with the password you set during PostgreSQL installation.

---

## Step 2: Setting Up the Backend Project Directory
1. **Create the Main Project Folder**
   - Open **File Explorer** and create a new folder named `restaurant_reservation_system`.
   - Inside `restaurant_reservation_system`, create a subfolder named `backend`.

---

## Step 3: Backend Setup with Django

### 3.1 Set Up a Virtual Environment
1. **Navigate to the `backend` folder** inside the main project directory.
2. **Open VS Code** and open the `backend` folder.
3. **Open Terminal** in VS Code (`Ctrl + ``).
4. **Path**: `restaurant_reservation_system/backend`
   Create a virtual environment:
   ```sh
   python -m venv venv
   ```
5. **Path**: `restaurant_reservation_system/backend`
   Activate the virtual environment:
   ```sh
   venv\Scripts\activate
   ```

### 3.2 Install Django and Other Dependencies
1. **Path**: `restaurant_reservation_system/backend`
   Install Django:
   ```sh
   pip install django
   ```
2. **Path**: `restaurant_reservation_system/backend`
   Install Django REST Framework and psycopg2 for PostgreSQL:
   ```sh
   pip install djangorestframework psycopg2-binary
   ```
3. **Path**: `restaurant_reservation_system/backend`
   Create a `requirements.txt` file to track dependencies:
   ```sh
   pip freeze > requirements.txt
   ```

### 3.3 Create Django Project and App
1. **Path**: `restaurant_reservation_system/backend`
   Create a Django project named `restaurant`:
   ```sh
   django-admin startproject restaurant .
   ```
2. **Path**: `restaurant_reservation_system/backend`
   Create a Django app named `reservations`:
   ```sh
   python manage.py startapp reservations
   ```
3. Register the `reservations` app in `restaurant/settings.py` by adding `'reservations'` to the `INSTALLED_APPS` list.
4. Also add `'rest_framework'` to `INSTALLED_APPS`.

### 3.4 Create Backend Files
1. **manage.py** (already created by Django).
2. **settings.py**: Configure database settings to use PostgreSQL:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'restaurant_db',
           'USER': 'postgres',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

3. **models.py** (in `reservations` app):
   ```python
   from django.db import models

   class Reservation(models.Model):
       customer_name = models.CharField(max_length=100)
       customer_email = models.EmailField(max_length=100)  # New field for email
       phone_number = models.CharField(max_length=15)  # New field for phone number
       reservation_date = models.DateTimeField()
       guests_count = models.PositiveIntegerField()
       special_request = models.TextField(blank=True, null=True)
   ```

4. **serializers.py** (in `reservations` app):
   ```python
   from rest_framework import serializers
   from .models import Reservation

   class ReservationSerializer(serializers.ModelSerializer):
       class Meta:
           model = Reservation
           fields = '__all__'
   ```

5. **views.py** (in `reservations` app):
   ```python
   from rest_framework import viewsets
   from .models import Reservation
   from .serializers import ReservationSerializer

   class ReservationViewSet(viewsets.ModelViewSet):
       queryset = Reservation.objects.all()
       serializer_class = ReservationSerializer
   ```

6. **urls.py** (in `restaurant` folder):
   ```python
   from django.contrib import admin
   from django.urls import path, include
   from rest_framework.routers import DefaultRouter
   from reservations.views import ReservationViewSet
   from django.views.generic import TemplateView

   router = DefaultRouter()
   router.register(r'reservations', ReservationViewSet)

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('', TemplateView.as_view(template_name="home.html"), name='home'),
       path('api/', include(router.urls)),
   ]
   ```

### 3.5 Run Database Migrations
1. **Path**: `restaurant_reservation_system/backend`
   Run the following command to create database tables:
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```

2. **Path**: `restaurant_reservation_system/backend`
   Create a superuser to access Django admin:
   ```sh
   python manage.py createsuperuser
   ```

---

After completing these steps, your backend should be set up and ready for integration with the frontend. You can now proceed to set up the React frontend to complete the restaurant reservation system.

Let me know if you need any help with the next steps!

