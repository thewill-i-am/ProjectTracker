# Aplicación con Express.js y jQuery

Esta es una aplicación web simple construida con Express.js en el lado del servidor y jQuery en el lado del cliente. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una lista de productos.

## Características

- Mostrar una lista de productos.
- Agregar un nuevo producto.
- Eliminar un producto.
- Editar un producto existente.

## Tecnologías utilizadas

- Express.js: Framework de aplicaciones web en Node.js.
- jQuery: Biblioteca JavaScript para manipular el DOM y realizar solicitudes AJAX.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2. Ve al directorio del proyecto: `cd tu-repositorio`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`
5. Abre tu navegador web y visita: `http://localhost:3000`

## Estructura del proyecto

- `app.js`: Archivo principal de la aplicación Express.js.
- `routes/products.js`: Rutas para la gestión de productos.
- `public/`: Carpeta que contiene los archivos estáticos (HTML, CSS, JavaScript).
- `views/`: Carpeta que contiene las vistas de la aplicación.

## Desarrollo

Durante el proceso de desarrollo, puedes utilizar Nodemon para reiniciar automáticamente el servidor cada vez que se realicen cambios en los archivos del proyecto.

Para configurar Nodemon en este proyecto, sigue los siguientes pasos:

1. Asegúrate de tener Nodemon instalado globalmente en tu máquina: `npm install -g nodemon`.
2. En el directorio raíz del proyecto, crea un archivo llamado `.nodemon.json`.
3. Dentro del archivo `.nodemon.json`, agrega la siguiente configuración:

```json
{
  "ext": "js",
  "ignore": ["public/"]
}

```

Guarda el archivo .nodemon.json.

Una vez configurado Nodemon, puedes iniciar el servidor utilizando el comando nodemon app.js en lugar de npm start. Esto hará que el servidor se reinicie automáticamente cada vez que se realicen cambios en los archivos JavaScript, lo que facilita el proceso de desarrollo.

Recuerda que Nodemon solo debe utilizarse en entornos de desarrollo y no debe ser utilizado en entornos de producción.
Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

    Realiza un fork del repositorio.
    Crea una rama para tu contribución: git checkout -b feature/nueva-caracteristica.
    Realiza tus cambios y realiza los commits correspondientes: git commit -m "Agregar nueva característica".
    Envía tus cambios a tu repositorio remoto: git push origin feature/nueva-caracteristica.
    Abre un pull request en este repositorio.

Licencia

Este proyecto está bajo la Licencia MIT. Para más información, por favor lee el archivo LICENSE.

Asegúrate de ajustar y personalizar el contenido según las necesidades específicas de tu proyecto.
