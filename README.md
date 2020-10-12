#  TIENDA ONLINE

> Sistema web e-commerce

## Tabla de Contenidos
- [Preparación del proyecto](#installing-a-dependency)
- [Scripts disponibles](#available-scripts)
    - [npm start](#npm-start)
    - [npm test](#npm-test)
    - [npm run build](#npm-run-build)
    - [npm run build:staging](#npm-run-build-staging)
    - [npm run lint](#npm-run-lint)
    - [npm run lint:fix](#npm-run-lint-fix)
    - [npm run serve:build](#npm-run-serve-build)
    - [npm run test:server](#npm-run-test-server)
- [Despliegue](#deployment)

## Preparación del proyecto

Para instalar todas las dependencias

``` bash
# install dependencies
npm install
```
Configurar el archivo `.env.local` con las variables de entorno locales

## Scripts disponibles

En el directorio del proyecto puede ejecutar:

### `npm start`

Ejecuta el proyecto en modo desarrollo.
Se debería abrir el proyecto en la ruta [http://localhost:3000](http://localhost:3000).
La página se recargara automáticamente si se realizan cambios.

### `npm test`

Ejecuta el test runner en watch mode

### `npm run build`

Compila el proyecto para producción dentro del folder `build`.
Es importante tener correctamente configurado el archivo .env.production ubicado en la raíz del directorio

### `npm run build:staging`

Compila el proyecto para desarrollo dentro del folder `build`.
Es importante tener correctamente configurado el archivo .env.staging ubicado en la raíz del directorio

### `npm run lint`

Ejecuta eslint para mostrar todos los posibles errores de desarrollo en el código. 

### `npm run lint:fix`

Ejecuta eslint para corregir los errores de desarrollo en el código. 
No todos los errores podrán ser corregidos por lo que será necesario corregirlos manualmente para poder hacer el commit del proyecto.

### `npm run serve:build`

Levanta el proyecto compilado en la ruta [http://localhost:9000](http://localhost:9000)

### `npm run test:server`

Compila el proyecto y lo levanta en la ruta [http://localhost:9000](http://localhost:9000)

## Despliegue

Para poder generar el proyecto se debe configurar el `homepage`, ubicado en `package.json` 
La ruta dependerá del dominio en el que estará ubicado el proyecto
Si el proyecto es para producción se deberá ejecutar el comando `npm run build`, este comando usará el archivo .env.production
Si es para desarrollo se deberá usar el comando `npm run build:staging`, este comando usará el archivo .env.staging
