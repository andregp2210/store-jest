#  TIENDA ONLINE

> Sistema web e-commerce

## Tabla de Contenidos
- [Preparación del proyecto](#preparación-del-proyecto)
- [Scripts disponibles](#scripts-disponibles)
    - [npm start](#npm-start)
    - [npm test](#npm-test)
    - [npm run build](#npm-run-build)
    - [npm run build:staging](#npm-run-build-staging)
    - [npm run lint](#npm-run-lint)
    - [npm run lint:fix](#npm-run-lint-fix)
    - [npm run serve:build](#npm-run-serve-build)
    - [npm run test:server](#npm-run-test-server)
- [Despliegue](#despliegue)

## Preparación del proyecto

Para instalar todas las dependencias

``` bash
# install dependencies
npm install
```
Configurar el archivo `.env.local` con las variables de entorno locales.

## Scripts disponibles

En el directorio del proyecto pueden ejecutar los siguientes scripts:

### `npm start`

Ejecuta el proyecto en modo desarrollo.<br>
Se debería abrir el proyecto en la ruta [http://localhost:3000](http://localhost:3000).<br>
La página se recargara automáticamente si se realizan cambios.

### `npm test`

Ejecuta el test runner en watch mode.<br>

### `npm run build`

Compila el proyecto para producción dentro del folder `build`.<br>
Es importante tener correctamente configurado el archivo .env.production ubicado en la raíz del directorio.

### `npm run build:staging`

Compila el proyecto para desarrollo dentro del folder `build`.<br>
Es importante tener correctamente configurado el archivo .env.staging ubicado en la raíz del directorio.

### `npm run lint`

Ejecuta eslint para mostrar todos los posibles errores de desarrollo en el código. <br>

### `npm run lint:fix`

Ejecuta eslint para corregir los errores de desarrollo en el código. <br>
No todos los errores podrán ser corregidos por lo que será necesario corregirlos manualmente para poder hacer el commit del proyecto.

### `npm run serve:build`

Levanta el proyecto compilado en la ruta [http://localhost:9000](http://localhost:9000)<br>

### `npm run test:server`

Compila el proyecto y lo levanta en la ruta [http://localhost:9000](http://localhost:9000)<br>

## Despliegue

Para poder generar el proyecto se debe configurar la clave `homepage`, ubicada en el archivo `package.json` con la ruta del entorno de publicación final. <br>
El script a ejecutar también dependerá del entorno en el que será publicado el proyecto:<br>
    1.- Producción: Se deberá ejecutar el comando `npm run build`, este comando usará el archivo .env.production .<br>
    2.- Desarrollo: Se deberá usar el comando `npm run build:staging`, este comando usará el archivo .env.staging .
