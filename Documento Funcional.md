# Documentación Funcional del Sistema de Reservas del Restaurante

## Descripción General
El Sistema de Reservas del Restaurante es una aplicación web diseñada para facilitar el proceso de reservas para los clientes, permitiéndoles reservar mesas en línea en un restaurante. La aplicación cuenta con componentes de frontend y backend, desarrollados usando **React** para el frontend y **Django** con **PostgreSQL** para el backend. Este documento proporciona una visión detallada de la funcionalidad y la arquitectura del sistema.

## Características Principales
1. **Formulario de Reservas**: Los clientes pueden enviar los detalles de su reserva, como nombre, correo electrónico, número de teléfono, fecha de la reserva, número de invitados y solicitudes especiales.
2. **Panel de Administración**: Los administradores del restaurante pueden gestionar las reservas a través de una interfaz de backend, proporcionada por el panel de administración de Django.
3. **API REST**: La comunicación entre el frontend y el backend se facilita a través de APIs RESTful construidas con Django REST Framework.

## Arquitectura del Sistema
- **Frontend**: Desarrollado en **React**, proporcionando una Aplicación de Página Única (SPA) dinámica e interactiva para los clientes.
- **Backend**: Desarrollado en **Django**, utilizando **Django REST Framework** (DRF) para crear una API REST que maneja las reservas de los clientes e interactúa con la base de datos.
- **Base de Datos**: Se utiliza **PostgreSQL** para un almacenamiento de datos estructurado y confiable.

## Roles de Usuarios y Casos de Uso
### Roles de Usuarios
1. **Cliente**: Un usuario que puede hacer reservas en línea.
2. **Administrador**: Un miembro del personal del restaurante que gestiona las reservas.

### Casos de Uso
1. **Cliente**:
   - Visita el sitio web de reservas del restaurante.
   - Ingresa los detalles de la reserva en el formulario de reservas.
   - Envía la solicitud de reserva.
   - Recibe un mensaje de éxito después del envío.
2. **Administrador**:
   - Inicia sesión en el panel de administración.
   - Ve, edita o elimina las reservas.

## Componentes Funcionales
### 1. Funcionalidad del Frontend
#### Componente del Formulario de Reservas
- **Campos de Entrada**:
  - **Nombre del Cliente**: Campo de texto para el nombre del cliente.
  - **Correo Electrónico**: Campo para el correo electrónico del cliente.
  - **Número de Teléfono**: Campo para el número de teléfono del cliente.
  - **Fecha de la Reserva**: Selector de fecha y hora para elegir la fecha de la reserva.
  - **Número de Invitados**: Campo numérico para especificar el número de invitados.
  - **Solicitud Especial**: Área de texto para cualquier solicitud especial del cliente.
- **Validación**: Los campos de entrada se validan para asegurarse de que se proporcionen todos los detalles requeridos antes del envío.
- **Llamada a la API**: Envía los datos de la reserva a la API del backend usando **Axios**.
- **Manejo de Respuestas**: Muestra un mensaje de éxito o una alerta de error según la respuesta del backend.

### 2. Funcionalidad del Backend
#### Modelos
- **Reserva**: El modelo de Django que representa una reserva con campos para los detalles del cliente, fecha de la reserva, número de invitados y solicitudes especiales.
  - Los campos incluyen:
    - `customer_name`: Nombre del cliente.
    - `customer_email`: Dirección de correo electrónico del cliente.
    - `phone_number`: Número de contacto del cliente.
    - `reservation_date`: Fecha y hora de la reserva.
    - `guests_count`: Número de invitados.
    - `special_request`: Solicitudes especiales opcionales.

#### Vistas
- **Reservation ViewSet**: Proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las reservas, expuestas a través de una API REST usando Django REST Framework.

#### URLs
- El backend define varias rutas URL, incluyendo:
  - `/admin/`: Acceso al panel de administración de Django.
  - `/api/reservations/`: Punto final de la API REST para gestionar las reservas.
  - `/`: Muestra la página de inicio de la aplicación.

#### Panel de Administración
- **Gestión de Reservas**: Los administradores pueden gestionar las reservas utilizando el panel de administración de Django, donde pueden crear, editar o eliminar reservas.

## Flujos del Sistema
### Flujo de Reserva del Cliente
1. **Abrir el Formulario de Reservas**: El cliente abre la página web con el formulario de reservas.
2. **Ingresar los Detalles de la Reserva**: El cliente ingresa su información (nombre, correo electrónico, número de teléfono, fecha de la reserva, número de invitados y cualquier solicitud especial).
3. **Enviar la Reserva**: El cliente envía la solicitud de reserva.
4. **Procesamiento del Backend**: Los datos de la reserva se envían al backend de Django mediante una solicitud POST.
5. **Almacenamiento en la Base de Datos**: El backend procesa la solicitud y almacena los detalles de la reserva en la base de datos PostgreSQL.
6. **Respuesta**: El backend envía una respuesta al frontend, que muestra un mensaje de confirmación.

### Flujo de Gestión del Administrador
1. **Inicio de Sesión del Administrador**: El administrador inicia sesión en el panel de administración de Django.
2. **Ver Reservas**: El administrador puede ver una lista de todas las reservas.
3. **Actualizar o Eliminar Reservas**: El administrador puede actualizar los detalles de la reserva o eliminar una reserva si es necesario.

## Descripción de la API
La API REST se utiliza para la interacción entre el frontend y el backend.
- **POST /api/reservations/**: Crea una nueva reserva.
  - **Cuerpo de la Solicitud**: Datos JSON que contienen la información del cliente, la fecha de la reserva, el número de invitados y las solicitudes especiales.
  - **Respuesta**: Devuelve un mensaje de éxito si la reserva se crea correctamente.
- **GET /api/reservations/**: Recupera todas las reservas (uso del administrador).

## Tecnología Utilizada
- **Frontend**: React, Axios para las solicitudes HTTP.
- **Backend**: Django, Django REST Framework.
- **Base de Datos**: PostgreSQL.
- **Herramientas**: Visual Studio Code (VS Code), pgAdmin para la gestión de PostgreSQL.

## Interfaz de Usuario
### Interfaz del Cliente
- La interfaz orientada al cliente está construida con React y está estilizada usando CSS para una apariencia moderna. El formulario de reservas es el elemento central de esta interfaz, permitiendo a los clientes enviar sus detalles para reservar una mesa.

### Interfaz del Administrador
- Los administradores pueden gestionar las reservas a través del panel de administración de Django. El panel de administración proporciona una interfaz fácil de usar para realizar operaciones CRUD en las reservas.

## Requisitos No Funcionales
1. **Seguridad**: Autenticación básica para el panel de administración. Validación de datos para todas las entradas de usuario para prevenir inyecciones SQL y otras vulnerabilidades de seguridad.
2. **Rendimiento**: Tiempo de respuesta rápido para el envío de formularios y la recuperación de datos. PostgreSQL se utiliza para una gestión eficiente de los datos.
3. **Escalabilidad**: El uso de Django REST Framework permite que el backend se extienda con puntos finales adicionales según sea necesario.

## Despliegue
- **Despliegue Local**: La aplicación está configurada para el despliegue local, con instrucciones para instalar las dependencias necesarias y ejecutar el servidor en localhost.
- **Consideraciones Futuras**: Para el despliegue en producción, se podrían utilizar servicios de alojamiento como Heroku o AWS para escalar la aplicación.

## Mejoras Futuras
1. **Confirmación de Reservas**: Agregar notificaciones por correo electrónico para la confirmación de reservas (actualmente no implementado).
2. **Autenticación de Usuarios**: Implementar autenticación de usuarios para que los clientes inicien sesión y puedan ver o cancelar sus reservas.
3. **Diseño Responsivo**: Mejorar el frontend para que sea más responsivo en diferentes dispositivos y tamaños de pantalla.

---

Este documento proporciona una visión funcional del Sistema de Reservas del Restaurante, describiendo sus características, arquitectura, flujos de trabajo y componentes. Si hay algún detalle adicional o pregunta, ¡no dudes en preguntar!

