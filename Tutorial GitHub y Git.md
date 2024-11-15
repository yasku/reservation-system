# Guía de Introducción a Git y GitHub para Principiantes

Git y GitHub son herramientas muy utilizadas por desarrolladores para el control de versiones y la colaboración en proyectos de software. Esta guía te ayudará a entender qué son, cómo funcionan y cómo puedes empezar a utilizarlos desde cero, incluso si nunca antes los has usado.

## ¿Qué es Git?

**Git** es un sistema de **control de versiones** que te permite llevar un registro de los cambios que realizas en tus archivos a lo largo del tiempo. En lugar de guardar varias versiones de un mismo archivo, Git guarda los cambios, lo cual es muy eficiente y útil para trabajar en equipo. Algunas de las cosas que puedes hacer con Git son:

- **Guardar diferentes versiones** de tus archivos.
- **Regresar a una versión anterior** si cometes un error.
- **Colaborar con otras personas**, permitiendo que varias personas trabajen en el mismo proyecto al mismo tiempo sin sobrescribir los cambios de los demás.

### ¿Por qué es útil?
Cuando trabajas en un proyecto, puedes cometer errores o querer regresar a una versión anterior. Git te permite hacer esto de manera fácil. Además, si trabajas en un equipo, Git facilita la integración de los cambios realizados por distintas personas.

## ¿Qué es GitHub?

**GitHub** es una plataforma basada en la web que facilita la gestión de proyectos Git. Es como una **red social para desarrolladores**, donde puedes almacenar tus repositorios de Git y colaborar con otros desarrolladores de manera sencilla. Con GitHub, puedes:

- **Almacenar y compartir proyectos** en la nube.
- **Colaborar** con otras personas de manera remota.
- **Mostrar tu trabajo** públicamente, lo cual es excelente para portafolios.

### Git vs GitHub
- **Git**: Es la herramienta para el control de versiones que instalas en tu computadora.
- **GitHub**: Es una plataforma en la nube que te permite alojar tus repositorios Git y colaborar con otros.

## Conceptos Básicos de Git
Para empezar a usar Git, necesitas conocer algunos conceptos básicos:

### 1. Repositorio (Repository)
Un **repositorio** es el lugar donde se almacenan tus archivos y su historial de versiones. Un repositorio puede estar en tu computadora (local) o en una plataforma como GitHub (remoto).

### 2. Commit
Un **commit** es una versión de tu proyecto. Cada vez que haces un commit, estás guardando el estado de tus archivos en ese momento. Es como una **foto** del proyecto en un punto específico.

### 3. Staging Area
Antes de hacer un commit, necesitas **preparar** los archivos que deseas incluir. La **staging area** es una especie de área temporal donde colocas los archivos que quieres agregar al commit.

### 4. Branch (Rama)
Una **rama** es una versión independiente del proyecto. Puedes trabajar en una nueva funcionalidad o corregir un error en una rama sin afectar el trabajo que está en la rama principal (por lo general llamada `main` o `master`).

### 5. Merge
**Merge** significa **combinar** el trabajo de una rama con otra. Por ejemplo, si has estado trabajando en una nueva funcionalidad en una rama separada, puedes hacer un merge para integrar esa funcionalidad en la rama principal.

## Instalación de Git y Configuración Inicial
### Instalación de Git
1. Ve a [git-scm.com](https://git-scm.com/) y descarga el instalador.
2. Sigue los pasos del instalador para instalar Git en tu computadora.

### Configuración Inicial
Después de instalar Git, debes configurar tu nombre y tu correo electrónico:
```sh
$ git config --global user.name "Tu Nombre"
$ git config --global user.email "tuemail@example.com"
```

Esto es necesario para que Git pueda identificar quién hizo los cambios en el proyecto.

## Uso Básico de Git en VS Code
VS Code tiene integración directa con Git, lo que facilita mucho su uso. A continuación, te mostraré cómo puedes usar Git desde VS Code paso a paso.

### Paso 1: Inicializar un Repositorio
- Abre tu proyecto en **VS Code**.
- Abre la terminal (`Ctrl + ``) y escribe:
  ```sh
  git init
  ```
  Esto inicializa un repositorio de Git en tu proyecto.

### Paso 2: Añadir Archivos a la Staging Area
- Haz cambios en algún archivo de tu proyecto.
- Abre la terminal y escribe:
  ```sh
  git add .
  ```
  Este comando añade todos los archivos al área de staging. Puedes también añadir archivos específicos escribiendo su nombre, por ejemplo: `git add archivo.txt`.

### Paso 3: Hacer un Commit
- Para guardar los cambios en tu repositorio, escribe:
  ```sh
  git commit -m "Descripción de los cambios"
  ```
  La descripción debe ser clara sobre los cambios realizados, por ejemplo, `"Agregada funcionalidad de reserva"`.

### Paso 4: Conectar con un Repositorio Remoto en GitHub
- Primero, crea un nuevo repositorio en GitHub siguiendo estos pasos:
  - Inicia sesión en GitHub.
  - Haz clic en el botón `+` en la parte superior derecha y selecciona **New repository**.
  - Ingresa un nombre para tu repositorio y haz clic en **Create repository**.
- Luego, copia la URL del repositorio.
- Conéctalo con tu repositorio local:
  ```sh
  git remote add origin https://github.com/tuusuario/tu-repositorio.git
  ```
  Asegúrate de reemplazar la URL por la tuya.

### Paso 5: Subir los Cambios a GitHub
- Para subir tus cambios a GitHub, usa el comando:
  ```sh
  git push -u origin master
  ```
  Esto subirá tu proyecto a GitHub.

## Usar Git con VS Code (sin Terminal)
### 1. Abrir el Panel de Source Control
En **VS Code**, haz clic en el icono de **Source Control** (parece una rama de árbol) en el panel izquierdo. Aquí verás todos los archivos que han sido modificados.

### 2. Añadir Archivos al Área de Staging
- Al lado de cada archivo modificado, hay un símbolo de `+`. Haz clic en este símbolo para añadir ese archivo al área de staging.

### 3. Hacer un Commit
- Ingresa una descripción del commit en la caja de texto y haz clic en el ícono de **check** para hacer el commit.

### 4. Subir los Cambios a GitHub
- Después de hacer un commit, haz clic en los tres puntos (`...`) en el panel de **Source Control** y selecciona **Push** para subir los cambios a GitHub.

## Ejemplo Práctico
Supongamos que estás trabajando en un proyecto de página web. Has agregado una nueva sección al archivo `index.html` y deseas guardar estos cambios en Git.

1. **Inicializa un Repositorio** (solo la primera vez):
   ```sh
   git init
   ```
2. **Añade el archivo `index.html` al Área de Staging**:
   ```sh
   git add index.html
   ```
3. **Haz un Commit** para guardar los cambios:
   ```sh
   git commit -m "Añadida nueva sección al index.html"
   ```
4. **Conecta con GitHub** y sube los cambios:
   ```sh
   git remote add origin https://github.com/tuusuario/mi-pagina-web.git
   git push -u origin master
   ```

¡Ahora tu proyecto está guardado en GitHub y puedes compartirlo con otros o colaborar con otras personas!

## Conceptos Adicionales
### Clonar un Repositorio
**Clonar** significa copiar un repositorio de GitHub a tu computadora. Si alguien te comparte un enlace a un repositorio, puedes clonarlo así:
```sh
git clone https://github.com/otro-usuario/repositorio.git
```
Esto copiará todos los archivos del proyecto en tu computadora.

### Branches y Merges
- Crear una nueva **rama** para trabajar en una nueva funcionalidad sin afectar el proyecto principal:
  ```sh
  git branch nueva-funcionalidad
  git checkout nueva-funcionalidad
  ```
  Ahora estás trabajando en una rama llamada `nueva-funcionalidad`.
- Una vez que termines, puedes **combinar** tu rama con la rama principal (`master` o `main`):
  ```sh
  git checkout master
  git merge nueva-funcionalidad
  ```

## Resumen
- **Git** se utiliza para el control de versiones de tus proyectos.
- **GitHub** es una plataforma para almacenar tus repositorios y colaborar con otros.
- Puedes usar **VS Code** para trabajar con Git de una manera fácil.
- Los pasos básicos incluyen: inicializar un repositorio, añadir archivos, hacer commits y subir el trabajo a GitHub.

Git puede parecer complicado al principio, pero con práctica se vuelve una herramienta poderosa para gestionar proyectos y trabajar en equipo. ¡Sigue explorando y practicando, y pronto te sentirás cómodo utilizándolo!

