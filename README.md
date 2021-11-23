# Grupo 4: Franco Baldasso, Martin Ramirez, Mariano Martin, José Pasini

# Drive
https://docs.google.com/document/d/15B_MuIOiNRUu9UKD1AWLnditwDpMvPXMxFJxtVxqW1w/edit


# Compu Mundo Hiper Mega Red
# REPOSITORIO
https://github.com/TomasHurtado/grupo_9_MPC
# COMANDOS PARA GENERAR LOS MODELOS DE COMPU MUNDO HIPER MEGA RED


# PASOS PARA ABRIR EL PROYECTO

# 1- Descargar el proyecto.

# 2- Abrir algún gestor de base de datos (en mi caso WorkBench) y crear una base de datos (por ejemplo "seqcompumundo"), elegiendo como Charset: uft8, y como Collation utf8_general_ci

![143099039-2af75637-03b7-4976-bbf2-6ee885ddb59d](https://user-images.githubusercontent.com/81484301/143133631-8bb6180b-fcbd-42f7-9aa6-a72bd15b14da.png)

# 3- Abrir la carpeta de todo el código en Visual Studio Code

# 4- En la carpeta raíz encontraremos un archivo llamado ".env" que contiene la información de la base de datos en la que se crearán nuestas tablas. El archivo contiene la siguiente configuración:

![143120828-78a6c842-295e-44c6-9e8c-3cf986f5ad2c](https://user-images.githubusercontent.com/81484301/143133672-2947b624-03d1-4736-8628-ca257432beee.png)
SE DEBERÁ CAMBIAR ESTA CONFIGURACIÓN SEGÚN LA BASE DE DATOS CREADA PARA CADA CASO.

# 5- Ingresar al archivo src/database/config/config.js, y en este modificarlo según la configuración de la base de datos, por ejemplo:
![143131226-26184922-a5ce-4aca-9dab-1253d84a7ad6](https://user-images.githubusercontent.com/81484301/143133718-2fa25ffe-2b72-465c-8994-7b7ee933069e.png)

# 6- Abrir un nuevo terminal, posicionarse en la carpeta "src" y ejecutar el comando: "npm install".
![143117948-2c5e169a-459e-4ac6-9db7-f5f7a71d0df2](https://user-images.githubusercontent.com/81484301/143133775-32a79407-e362-4bed-88a2-3c9e3abd6226.png)

# 7- Instaladas las dependendecias, posicionar la terminal en la carpeta "database" y ejecutar el comando: sequelize db:migrate
![143131803-4d790382-9137-4d4e-a1d8-47056c95d297](https://user-images.githubusercontent.com/81484301/143133791-d1f8e121-31e7-4acd-accc-ba586ee55547.png)

# 8- Verificar en el gestor de base de datos la creación de las tablas.
![143132080-c0663b6d-fb6d-4f4f-9c7f-b223a0484227](https://user-images.githubusercontent.com/81484301/143133824-9f5d2a07-24f8-44a6-9c41-8a5d44a0a838.png)

# Diagrama UML realizado en WorkBench:
![Modelo CompuMundo HiperMegRed](https://user-images.githubusercontent.com/81484301/141873621-82811262-3b6e-4050-96bf-4dc4b4bd3d68.jpeg)
# -------------------------------------------------------------------------------------------------------------------------------------------

# Rikolinos
# REPOSITORIOS
https://github.com/Marianocr98/Proyecto-Integrador-Grupo-10-LosRikolinos

# COMANDOS PARA GENERAR LOS MODELOS DE RIKOLINOS

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

# 1- Descargar el proyecto
# 2- Abrir XAMPP y prender MySQL.
![143047961-e2402ab8-297d-40d0-abff-83a3f68fd248](https://user-images.githubusercontent.com/81484301/143082580-00976562-f9c0-42d4-9432-08bf1fcd87fd.png)
# 3- Abrir algún gestor de base de datos (en mi caso SqlYOG) y crear una base de datos (en mi caso rikolino_bd_prueba)
![143048132-e77afd14-f0f1-434c-a8e6-adcc8633691f](https://user-images.githubusercontent.com/81484301/143082608-db57728a-cb05-41ec-a098-c73aeb8c3f62.png)
# 4- Abrir la carpeta de todo el código en Visual Studio Code
# 5- En la carpeta raíz (src) crear el archivo ".sequelizerc" y agregar esto:

const path = require('path')

module.exports = { config: path.resolve('./src/database/config', 'config.js'), 'models-path': path.resolve('./src/database/models'), 'seeders-path': path.resolve('./src/database/seeders'), 'migrations-path': path.resolve('./src/database/migrations'), }
![143048301-85bfdcc3-6dd3-4a78-8011-b2ea45ed1095](https://user-images.githubusercontent.com/81484301/143082693-b1449d27-d1ed-482a-81c5-c9a8341f8cd8.png)

# 6- En la carpeta raíz agregar un archivo llamado ".env" y agregar esto o configurarlo segun su base de datos:

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
![143049246-10807784-f617-4eec-8faa-3152f1bf9bc6](https://user-images.githubusercontent.com/81484301/143083219-72d73868-a43a-4b11-80bf-53c806dc5cfc.png)

Diagrama UML realizado en WorkBench:
![143049321-332ee0dc-b055-449f-a5f7-8a51704dc5f7](https://user-images.githubusercontent.com/81484301/143083248-b4dfffd5-83d8-4bcd-ac8c-2a92b7a173a9.jpg)







