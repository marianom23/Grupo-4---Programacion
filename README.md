# Grupo 4: Franco Baldasso, Martin Ramirez, Mariano Martin, José Pasini

# Drive
https://docs.google.com/document/d/15B_MuIOiNRUu9UKD1AWLnditwDpMvPXMxFJxtVxqW1w/edit


# Compu Mundo Hiper Mega Red
![Modelo CompuMundo HiperMegRed](https://user-images.githubusercontent.com/81484301/141873621-82811262-3b6e-4050-96bf-4dc4b4bd3d68.jpeg)

repositorio: https://github.com/TomasHurtado/grupo_9_MPC

# ------------------------------------------------------------------------------------------------------------------------------------------------------------

# Rikolinos
![Modelo Rikolino](https://user-images.githubusercontent.com/81484301/141873629-32f77fef-9ac4-4676-bc5b-9f0c9b6f8b07.jpeg)


# COMANDOS PARA GENERAR LOS MODELOS DE RIKOLINOS

Grupo repositorio: https://github.com/Marianocr98/Proyecto-Integrador-Grupo-10-LosRikolinos


npx sequelize model:generate --name Menu --attributes nombre:string,descripcion:string

npx sequelize model:generate --name Categoria --attributes nombre:string

npx sequelize model:generate --name Subcategoria --attributes nombre:string,categoriaId:integer

npx sequelize model:generate --name Visible --attributes nombre:string

npx sequelize model:generate --name Producto --attributes nombre:string,precio:decimal,descripcion:string,categoriaId:integer,visibilidadId:integer,subcategoriaId:integer,subcategoria_categoriaId:integer,menuId:integer

npx sequelize model:generate --name Insumo --attributes nombre:string,productoId:integer

npx sequelize model:generate --name Imagen --attributes nombre:string,productoId:integer

npx sequelize model:generate --name Usuario --attributes nombre:string,apellido:string,email:string,contrasenia:string

npx sequelize model:generate --name Domicilio --attributes calle:string,numero:integer,departamento:string,codigoPostal:integer,usuarioId:integer

npx sequelize model:generate --name Factura --attributes fecha:date,total:decimal,usuarioId:integer

npx sequelize model:generate --name DetalleFactura --attributes cantidad:integer,subtotal:decimal,productoId:integer,facturaId:integer

# PASOS PARA ABRIR EL PROYECTO

1- Descargar el proyecto
2- Abrir XAMPP y prender MySQL.
![143047961-e2402ab8-297d-40d0-abff-83a3f68fd248](https://user-images.githubusercontent.com/81484301/143082580-00976562-f9c0-42d4-9432-08bf1fcd87fd.png)
3- Abrir algún gestor de base de datos (en mi caso SqlYOG) y crear una base de datos (en mi caso rikolino_bd_prueba)
![143048132-e77afd14-f0f1-434c-a8e6-adcc8633691f](https://user-images.githubusercontent.com/81484301/143082608-db57728a-cb05-41ec-a098-c73aeb8c3f62.png)
4- Abrir la carpeta de todo el código en Visual Studio Code
5- En la carpeta raíz (src) crear el archivo ".sequelizerc" y agregar esto:

const path = require('path')

module.exports = { config: path.resolve('./src/database/config', 'config.js'), 'models-path': path.resolve('./src/database/models'), 'seeders-path': path.resolve('./src/database/seeders'), 'migrations-path': path.resolve('./src/database/migrations'), }
![143048301-85bfdcc3-6dd3-4a78-8011-b2ea45ed1095](https://user-images.githubusercontent.com/81484301/143082693-b1449d27-d1ed-482a-81c5-c9a8341f8cd8.png)
En la carpeta raíz agregar un archivo llamado ".env" y agregar esto:

DB_USERNAME=root
DB_PASSWORD=
DB_HOST=localhost
DB_DATABASE=rikolino_bd_prueba
DB_PORT=3306
DB_DIALECT=mysql

![143052449-32cba3be-2b75-4a84-8985-98a50e6a4323](https://user-images.githubusercontent.com/81484301/143082750-951b7584-bf3f-4947-b411-780f5b2befbb.png)

Entrar a la carpeta: "Node Rikolino/src/database/config/config.js" y cambiar las configuraciones en base a tus configuraciones.
![143048636-d8d49e84-b5d3-4ce4-baf3-6225dc8d9e26](https://user-images.githubusercontent.com/81484301/143082771-84874455-f185-4cc3-8376-eeaefeb770ad.png)

Abrir la terminal y parado en la carpeta "src" agregar el comando: "npm install"
![143048950-7053e4c5-afac-4815-8244-f3fbd0a827df](https://user-images.githubusercontent.com/81484301/143082797-db0c012e-b98e-4df3-9e37-877d0e7b8749.png)

Una vez instaladas las dependencias agregar dentro de database el comando "npx sequelize db:migrate"
![143049093-e4e053e2-2ea5-4e4f-b50b-8fce5af436b1](https://user-images.githubusercontent.com/81484301/143082819-e9f85467-9c38-4cb9-b261-206fde30fc09.png)

Revisar en el gestor de base de datos si se crearon las tablas correspondientes:
![143049246-10807784-f617-4eec-8faa-3152f1bf9bc6](https://user-images.githubusercontent.com/81484301/143082835-7e8de83b-83c8-4c1c-9189-616a495ff305.png)





