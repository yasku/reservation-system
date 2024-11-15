# Documentación Técnica del Sistema de Reservas del Restaurante

## Descripción General
El Sistema de Reservas del Restaurante es una aplicación web que permite a los clientes reservar mesas en línea de manera eficiente. Este documento técnico describe la arquitectura, componentes, tecnologías utilizadas, y las configuraciones necesarias para desplegar el sistema. El sistema consta de un **backend** desarrollado con **Django** y un **frontend** desarrollado con **React**. La base de datos utilizada es **PostgreSQL**.

## Arquitectura del Sistema
El sistema sigue una arquitectura de **aplicación monolítica** dividida en los siguientes componentes:
- **Frontend**: Aplicación de Página Única (SPA) desarrollada en **React**.
- **Backend**: API RESTful construida en **Django** usando **Django REST Framework** (DRF).
- **Base de Datos**: **PostgreSQL** se utiliza para almacenar y gestionar los datos de las reservas.

### Diagrama de Arquitectura
- **Cliente (Navegador)**: El usuario interactúa con la interfaz desarrollada en React.
- **Frontend (React)**: La interfaz del usuario envía solicitudes al backend a través de la API REST.
- **Backend (Django)**: Django procesa las solicitudes, realiza operaciones CRUD y gestiona la lógica empresarial.
- **Base de Datos (PostgreSQL)**: Almacena la información de las reservas.

## Componentes Técnicos

### 1. Backend (Django)
El backend se encarga de gestionar la lógica del negocio y proporcionar la API REST para la comunicación entre el cliente y el servidor. Los principales componentes del backend incluyen:

#### 1.1 Configuración del Proyecto
- **settings.py**: Archivo de configuración principal de Django. Contiene las configuraciones de la base de datos, aplicaciones instaladas, middleware y otros ajustes importantes.
- **urls.py**: Define las rutas de la API y la dirección del panel de administración.

#### 1.2 Modelos
- **Reservation**: El modelo `Reservation` se define en `reservations/models.py` y representa una reserva con los siguientes campos:
  - `customer_name`: Nombre del cliente.
  - `customer_email`: Correo electrónico del cliente.
  - `phone_number`: Número de teléfono del cliente.
  - `reservation_date`: Fecha y hora de la reserva.
  - `guests_count`: Número de invitados.
  - `special_request`: Solicitudes especiales del cliente.

#### 1.3 Vistas (Views)
- Se implementa un `ViewSet` utilizando Django REST Framework para manejar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre el modelo `Reservation`. Esto permite que el frontend se comunique con el backend a través de endpoints RESTful.

#### 1.4 Serializadores (Serializers)
- **ReservationSerializer**: Se utiliza para convertir los datos del modelo `Reservation` en un formato JSON y viceversa, facilitando la comunicación con el frontend.

#### 1.5 Rutas de la API
- `/api/reservations/`: Endpoint para crear y listar reservas.
- `/admin/`: Acceso al panel de administración para gestionar las reservas.

### 2. Frontend (React)
El frontend del sistema está diseñado para proporcionar una experiencia de usuario interactiva y amigable. Los principales componentes incluyen:

#### 2.1 Estructura del Proyecto
- **`src/components/ReservationForm.js`**: Componente principal para gestionar las reservas de los clientes.
- **`src/components/ReservationForm.css`**: Archivo CSS para estilizar el formulario de reservas.

#### 2.2 Componentes
- **ReservationForm**: Este componente permite a los usuarios ingresar la información de la reserva, incluyendo nombre, correo electrónico, número de teléfono, fecha de reserva, número de invitados y solicitudes especiales. Utiliza **Axios** para enviar solicitudes POST a la API del backend.
- **React Router**: Se utiliza para gestionar la navegación en la SPA.

### 3. Base de Datos (PostgreSQL)
- La base de datos **PostgreSQL** almacena los registros de las reservas. Las configuraciones de la base de datos se definen en el archivo `settings.py` del proyecto Django.
- **Estructura de la Tabla**: La tabla de reservas contiene campos que corresponden a los atributos del modelo `Reservation`.

## Configuración del Entorno

### Requisitos Previos
- **Python 3.x**: Para el backend.
- **Node.js y npm**: Para el frontend.
- **PostgreSQL**: Base de datos para el almacenamiento de las reservas.

### Instalación y Configuración

#### Backend
1. **Crear el entorno virtual**:
   ```sh
   python -m venv venv
   ```
2. **Activar el entorno virtual**:
   ```sh
   venv\Scripts\activate
   ```
3. **Instalar dependencias**:
   ```sh
   pip install -r requirements.txt
   ```
4. **Configurar la base de datos** en `restaurant/settings.py`.
5. **Aplicar migraciones**:
   ```sh
   python manage.py makemigrations
   python manage.py migrate
   ```
6. **Crear un superusuario** para el panel de administración:
   ```sh
   python manage.py createsuperuser
   ```
7. **Ejecutar el servidor de desarrollo**:
   ```sh
   python manage.py runserver
   ```

#### Frontend
1. **Instalar dependencias**:
   ```sh
   npm install
   ```
2. **Ejecutar el servidor de desarrollo**:
   ```sh
   npm start
   ```

## Despliegue

### Despliegue Local
- **Backend**: Ejecutar el servidor de Django localmente utilizando `python manage.py runserver`.
- **Frontend**: Ejecutar el servidor de desarrollo de React utilizando `npm start`.

### Consideraciones para el Despliegue en Producción
- **Backend**: Se recomienda utilizar servicios como **Heroku**, **AWS**, o **DigitalOcean** para desplegar el backend en un entorno de producción.
- **Frontend**: El frontend se puede alojar en **Netlify** o **Vercel** para facilitar el acceso público.

## Seguridad
- **Autenticación del Administrador**: El acceso al panel de administración está protegido por credenciales de administrador.
- **Validación de Datos**: Se implementa validación en el backend para evitar inyecciones SQL y asegurar la integridad de los datos.
- **CORS**: Se utiliza la configuración de **CORS** para permitir que el frontend acceda a la API del backend desde dominios diferentes durante el desarrollo.

## Pruebas
### Pruebas Unitarias
- Se recomienda implementar **pruebas unitarias** para verificar la funcionalidad de los modelos y vistas en Django.
- Utilizar **pytest** o el módulo de pruebas incorporado de Django para validar la lógica del negocio.

### Pruebas de Integración
- Probar la integración entre el frontend y el backend enviando solicitudes a los endpoints y verificando las respuestas en el frontend.

## Mejoras Futuras
- **Notificaciones por Correo Electrónico**: Implementar un sistema de notificaciones por correo electrónico para confirmar las reservas de los clientes.
- **Autenticación de Usuarios**: Agregar autenticación para que los clientes puedan crear cuentas y gestionar sus reservas.
- **Diseño Responsivo**: Mejorar la interfaz de usuario para que sea totalmente responsiva y se adapte a diferentes tamaños de pantalla.

## Tecnologías Utilizadas
- **Frontend**: React, Axios, CSS.
- **Backend**: Django, Django REST Framework.
- **Base de Datos**: PostgreSQL.
- **Herramientas de Desarrollo**: Visual Studio Code, pgAdmin, Node.js.

---
Este documento proporciona una visión técnica del Sistema de Reservas del Restaurante, detallando los componentes, la arquitectura, las tecnologías utilizadas y las configuraciones necesarias para desplegar la aplicación. Si necesitas más detalles o ayuda con algún aspecto específico del sistema, no dudes en preguntar.

