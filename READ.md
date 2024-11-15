# Complete Step-by-Step Guide for Restaurant Reservation System Setup

This guide will walk you through setting up a restaurant reservation system using Django and React on a Windows system, with Visual Studio Code (VS Code) as the IDE. The guide is designed for non-programmers and covers everything in detail, from installation to running the project.

## Overview
You will create a monolithic restaurant reservation system with:
- **Backend**: Django & PostgreSQL
- **Frontend**: React
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

### 1.2 Install Node.js and npm
1. Go to [Node.js download page](https://nodejs.org/en/download/).
2. Download the Windows installer.
3. Run the installer and follow the on-screen instructions.

### 1.3 Install PostgreSQL
1. Go to [PostgreSQL download page](https://www.postgresql.org/download/windows/).
2. Download the installer and follow the installation steps.
3. During installation, set up a password for the default PostgreSQL user (`postgres`). Remember this password, as it will be used later.

### 1.4 Install Visual Studio Code
1. Go to [Visual Studio Code website](https://code.visualstudio.com/).
2. Download the Windows installer.
3. Run the installer and follow the on-screen instructions.

---

## Step 2: Setting Up the Project Directory
1. **Create the Main Project Folder**
   - Open **File Explorer** and create a new folder named `restaurant_reservation_system`.
   - Inside `restaurant_reservation_system`, create two subfolders: `backend` and `frontend`.

---

## Step 3: Backend Setup with Django

### 3.1 Set Up a Virtual Environment
1. **Open VS Code** and open the `backend` folder.
2. **Open Terminal** in VS Code (`Ctrl + ``).
3. Create a virtual environment:
   ```sh
   python -m venv venv
   ```
4. Activate the virtual environment:
   ```sh
   venv\Scripts\activate
   ```

### 3.2 Install Django and Other Dependencies
1. Install Django:
   ```sh
   pip install django
   ```
2. Install Django REST Framework and psycopg2 for PostgreSQL:
   ```sh
   pip install djangorestframework psycopg2-binary
   ```
3. Create a `requirements.txt` file to track dependencies:
   ```sh
   pip freeze > requirements.txt
   ```

### 3.3 Create Django Project and App
1. Create a Django project named `restaurant`:
   ```sh
   django-admin startproject restaurant .
   ```
2. Create a Django app named `reservations`:
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

   router = DefaultRouter()
   router.register(r'reservations', ReservationViewSet)

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('api/', include(router.urls)),
   ]
   ```

### 3.5 Run Database Migrations
1. Run the following command to create database tables:
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```

2. Create a superuser to access Django admin:
   ```sh
   python manage.py createsuperuser
   ```

---

## Step 4: Frontend Setup with React

### 4.1 Initialize React Project
1. **Open a New Terminal** in VS Code and navigate to the `frontend` folder.
2. Initialize a React app:
   ```sh
   npx create-react-app .
   ```

### 4.2 Install Dependencies
1. Install Axios for API requests:
   ```sh
   npm install axios
   ```
2. Install React Router for page navigation:
   ```sh
   npm install react-router-dom
   ```

### 4.3 Create Frontend Files
1. **App.js** (in `frontend/src`):
   ```javascript
   import React, { useState, useEffect } from 'react';
   import axios from 'axios';

   function App() {
       const [reservations, setReservations] = useState([]);

       useEffect(() => {
           axios.get('http://localhost:8000/api/reservations/')
               .then(response => setReservations(response.data))
               .catch(error => console.error('Error fetching reservations', error));
       }, []);

       return (
           <div>
               <h1>Restaurant Reservations</h1>
               <ul>
                   {reservations.map((reservation) => (
                       <li key={reservation.id}>
                           {reservation.customer_name} - {reservation.reservation_date}
                       </li>
                   ))}
               </ul>
           </div>
       );
   }

   export default App;
   ```

---

## Step 5: Running the Project

### 5.1 Running the Backend
1. Make sure your virtual environment is activated.
2. Start the Django server:
   ```sh
   python manage.py runserver
   ```
3. The backend will be running on `http://localhost:8000`.

### 5.2 Running the Frontend
1. In a new terminal, navigate to the `frontend` directory.
2. Start the React development server:
   ```sh
   npm start
   ```
3. The frontend will be available on `http://localhost:3000`.

---

## Step 6: Testing the Application
- Access the Django admin interface at `http://localhost:8000/admin` using the superuser credentials you created.
- Access the frontend at `http://localhost:3000` to see the list of reservations.

---

## Next Steps
- Deploy the application locally for further testing before considering any hosting service.
- Reach out if you encounter any issues or need support during setup or deployment.

Feel free to use this guide, and let me know if anything is unclear or if further support is needed!

