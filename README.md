# 🍽️ Sistema de Reservas para Restaurante

Este proyecto es un **sistema de reservas para un restaurante** desarrollado con **Django** (backend) y **React** (frontend). La aplicación permite gestionar las reservas realizadas por los clientes y también ofrece una interfaz para la administración del restaurante. Está diseñado para ser intuitivo, moderno y fácilmente manejable tanto por los clientes como por los administradores del restaurante.

## 📋 Tabla de Contenidos
1. [Características](#características)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Uso](#uso)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Diagramas y Capturas de Pantalla](#diagramas-y-capturas-de-pantalla)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

## ✨ Características
- **Reservas en Línea**: Los clientes pueden realizar reservas en el restaurante a través de una interfaz amigable. 🗓️
- **Gestión de Reservas**: Los administradores pueden ver, confirmar y gestionar las reservas desde el panel de administración. 📊
- **Interfaz Moderna**: La aplicación utiliza React para proporcionar una interfaz de usuario atractiva y fácil de usar. 🖥️
- **Confirmación de Reservas**: Los administradores pueden confirmar las reservas y enviar correos electrónicos automáticos de confirmación a los clientes. 📧
- **Panel de Administración Mejorado**: Utiliza Django Admin Interface para una gestión de datos sencilla y profesional. ⚙️

## 🛠️ Tecnologías Utilizadas
- **Backend**: Django, Django REST Framework
- **Frontend**: React, HTML, CSS, JavaScript
- **Base de Datos**: PostgreSQL
- **Interfaz de Administración**: Django Admin Interface / Grappelli
- **Autenticación**: Token JWT

## 📋 Requisitos Previos
Antes de instalar el proyecto, asegúrate de tener los siguientes requisitos instalados en tu máquina:
- Python 3.8+
- Node.js 14+
- PostgreSQL
- Git

## 🚀 Instalación y Configuración
Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

### 1. Clonar el Repositorio
```sh
git clone https://github.com/tuusuario/restaurant-reservation-system.git
cd restaurant-reservation-system
```

### 2. Configuración del Backend (Django)
1. Crea un entorno virtual y actívalo:
   ```sh
   python -m venv venv
   venv\Scripts\activate (en Windows) o source venv/bin/activate (en Mac/Linux)
   ```
2. Instala las dependencias del backend:
   ```sh
   pip install -r requirements.txt
   ```
3. Realiza las migraciones de la base de datos:
   ```sh
   python manage.py migrate
   ```
4. Crea un superusuario para acceder al panel de administración:
   ```sh
   python manage.py createsuperuser
   ```
5. Inicia el servidor de desarrollo de Django:
   ```sh
   python manage.py runserver
   ```

### 3. Configuración del Frontend (React)
1. Navega a la carpeta del frontend:
   ```sh
   cd frontend
   ```
2. Instala las dependencias del frontend:
   ```sh
   npm install
   ```
3. Inicia la aplicación de React:
   ```sh
   npm start
   ```

### 4. Acceso a la Aplicación
- **Frontend**: Abre tu navegador y ve a `http://localhost:3000` para acceder a la interfaz de usuario.
- **Backend**: Accede al panel de administración en `http://localhost:8000/admin/`.

## 🎯 Uso
- Los **clientes** pueden acceder a la interfaz de usuario para realizar reservas.
- Los **administradores** pueden acceder al panel de administración para gestionar las reservas y confirmar o rechazar las solicitudes.

## 📁 Estructura del Proyecto
```
restaurant-reservation-system/
├── backend/
│   ├── manage.py
│   ├── restaurant/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...
│   ├── reservations/
│   │   ├── models.py
│   │   ├── views.py
│   │   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ReservationForm.js
│   │   │   └── ...
│   ├── package.json
└── README.md
```

## 📊 Diagramas y Capturas de Pantalla
A continuación, algunas capturas de pantalla y diagramas de la aplicación:

### 1. **Diagrama de Flujo de la Aplicación**
![Diagrama de Flujo](assets/flowchart.png)

### 2. **Página de Reservas**
![Página de Reservas](assets/screenshot_reservas.png)

### 3. **Panel de Administración**
![Panel de Administración](assets/screenshot_admin.png)

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:
1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Haz commit de tus cambios (`git commit -m 'Añadir nueva feature'`).
4. Sube tu rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.

## 📜 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

Gracias por visitar el proyecto. 🍽️ ¡Esperamos que esta aplicación sea útil para tu restaurante! Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactar directamente. 😊

