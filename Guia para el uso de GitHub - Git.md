# Guía Paso a Paso para Usar Git y Subir el Proyecto a GitHub con Visual Studio Code

Esta guía te ayudará a entender cómo usar **Git** y cómo subir tu proyecto a **GitHub** utilizando **Visual Studio Code (VS Code)**. Está diseñada para principiantes que nunca han utilizado estas herramientas antes.

## Requisitos Previos
1. **Cuenta de GitHub**: Crea una cuenta en [github.com](https://github.com) si aún no la tienes.
2. **Visual Studio Code (VS Code)**: Instala VS Code en tu computadora desde [code.visualstudio.com](https://code.visualstudio.com/).
3. **Git**: Asegúrate de tener Git instalado en tu sistema. Puedes descargarlo de [git-scm.com](https://git-scm.com/).

---

## Paso 1: Instalación y Configuración de Git

### 1.1 Instalar Git
- Visita [git-scm.com](https://git-scm.com/) y descarga Git.
- Sigue las instrucciones del instalador para instalar Git en tu computadora.

### 1.2 Configurar Git
- Abre **VS Code** y abre una terminal presionando `Ctrl + `` (la tecla que está justo debajo de Esc).
- Configura tu nombre de usuario y correo electrónico para que se reflejen en los commits:
  ```sh
  git config --global user.name "Tu Nombre"
  git config --global user.email "tuemail@example.com"
  ```
- Para comprobar la configuración:
  ```sh
  git config --list
  ```

## Paso 2: Crear un Repositorio en GitHub

### 2.1 Crear un Repositorio Nuevo
1. **Inicia sesión en GitHub**.
2. Haz clic en el botón `+` en la esquina superior derecha y selecciona **New repository**.
3. Ingresa un **nombre para el repositorio** (por ejemplo, `restaurant-reservation-system`).
4. Añade una descripción opcional.
5. Selecciona si deseas que el repositorio sea **público** o **privado**.
6. Haz clic en **Create repository**.

### 2.2 Copiar la URL del Repositorio
- Una vez creado el repositorio, copia la URL del mismo (se mostrará en la parte superior, algo como `https://github.com/tuusuario/restaurant-reservation-system.git`).

## Paso 3: Inicializar un Repositorio Git Localmente

### 3.1 Inicializar Git en tu Proyecto
1. Abre tu proyecto en **VS Code**.
2. Abre una terminal (`Ctrl + ``).
3. Asegúrate de estar en la carpeta raíz del proyecto (ejemplo: `restaurant_reservation_system`).
4. Ejecuta el siguiente comando para inicializar un repositorio Git:
   ```sh
   git init
   ```
   Esto creará un nuevo repositorio local en tu proyecto.

### 3.2 Añadir Archivos al Repositorio
- Añade todos los archivos del proyecto al repositorio local:
  ```sh
  git add .
  ```
  Este comando añade todos los archivos al área de preparación (staging area).

### 3.3 Realizar el Primer Commit
- Realiza un commit de los archivos añadidos:
  ```sh
  git commit -m "Primer commit - Sistema de Reservas del Restaurante"
  ```

## Paso 4: Conectar el Repositorio Local con GitHub

### 4.1 Añadir el Repositorio Remoto
- Conecta el repositorio local con el repositorio remoto en GitHub que creaste previamente:
  ```sh
  git remote add origin https://github.com/tuusuario/restaurant-reservation-system.git
  ```
  Asegúrate de reemplazar la URL con la URL de tu propio repositorio.

### 4.2 Subir el Proyecto a GitHub
- Sube tu commit al repositorio remoto en GitHub:
  ```sh
  git push -u origin master
  ```
  Esto subirá tu proyecto a GitHub y configurará la rama `master` como la principal.

## Paso 5: Realizar Cambios y Subir Nuevas Actualizaciones

### 5.1 Hacer Cambios en el Código
- Realiza los cambios que necesites en tu proyecto utilizando **VS Code**.

### 5.2 Añadir y Confirmar los Cambios
- Una vez que hayas realizado cambios, abre la terminal y sigue estos pasos:
  1. **Añadir los cambios**:
     ```sh
     git add .
     ```
  2. **Hacer un commit**:
     ```sh
     git commit -m "Descripción de los cambios realizados"
     ```

### 5.3 Subir los Cambios a GitHub
- Sube los cambios confirmados al repositorio remoto en GitHub:
  ```sh
  git push
  ```

## Paso 6: Visualizar los Cambios en GitHub
- Abre tu navegador y dirígete a tu repositorio en GitHub para ver los archivos que has subido y los cambios realizados.

## Paso 7: Uso de VS Code para Manejar Git

### 7.1 Panel de Control de Source Control en VS Code
- En **VS Code**, haz clic en el icono de **Source Control** (parece un ícono de rama de Git) en el panel lateral izquierdo.
- Aquí puedes ver los cambios realizados, añadir archivos, hacer commits, y realizar otras acciones relacionadas con Git sin necesidad de usar la terminal.

### 7.2 Añadir Cambios desde VS Code
- Cuando realices cambios en algún archivo, verás un ícono `U` (Untracked) o `M` (Modified) en el panel de **Source Control**.
- Puedes añadir los cambios a staging haciendo clic en el ícono `+` que aparece junto a cada archivo.
- Luego, ingresa un mensaje de commit en la caja de texto y haz clic en el botón **Commit** (ícono de marca de verificación).
- Finalmente, para subir los cambios, haz clic en el botón **…** (tres puntos) y selecciona **Push**.

## Problemas Comunes y Soluciones
1. **Error de Autenticación**:
   - Asegúrate de ingresar correctamente tus credenciales de GitHub cuando se te solicite.
   - Puedes configurar un **Personal Access Token** en GitHub para usarlo como contraseña.

2. **Error de Conflictos de Merge**:
   - Si varios desarrolladores están trabajando en el mismo proyecto, pueden ocurrir conflictos. En este caso, deberás editar manualmente los archivos para resolver los conflictos y luego hacer un commit de la versión corregida.

3. **Cambios no Reflejados en GitHub**:
   - Asegúrate de que todos los cambios han sido añadidos y confirmados antes de hacer `git push`.

---

Esta guía te proporciona un paso a paso detallado sobre cómo usar Git para gestionar tu proyecto y cómo subirlo a GitHub utilizando VS Code. Si tienes alguna pregunta o necesitas más ayuda, ¡no dudes en pedirla!

