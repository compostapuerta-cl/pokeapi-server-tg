# PokeAPI - Trascender Global

## Backend

Tecnologías y herramientas utilizadas para el desarrollo
de esta aplicación:

* [x] **Node.js**
* [x] **Javascript**
* [x] **Express**
* [x] **MongoDB**
* [x] **Mongoose**


## BASE DE DATOS
Para la aplicación se creó una BBDD en MongoDB y se utilizó un cluster gratuito que
ya tenía creado, a continuación dejaré el link de conexión para poder realizarlo en 
cualquier entorno de bases de datos como DataGrip, Robo 3T, MongoDB Atlas, entre otros.

Cabe aclarar que, esta línea de conexión también se encontrará en el archivo
.env que se publica en el repositorio.

## Endpoint
Para guardar la información del Pokemon consultado se habilitó el siguiente endpoint
con método POST:

```
POST   http://localhost:4000/api/pokemon
```



## Scripts
El primer paso es instalar las dependencias.
### `npm install`

<br>

Para correr la aplicación sin la dependencia __nodemon__:

### `npm run start`

<br>

Para correr la aplicación con la dependencia __nodemon__:

### `npm run dev`

<br>

La aplicación correrá en modo de desarrollo en [http://localhost:4000](http://localhost:4000)
