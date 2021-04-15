# Back end en conexion con OpenPay

Despues de aver descargado el proyecto favor de correr el siguiente comando para descargar las dependencias

### `npm install`

Cuando termine de descargar ejecutar el siguiente commando para correr el proyecto.

### `npm run test`

La base de datos que utiliza el proyecto se encuentra en la carpeta base y el archivo Datos.db

En el proyecto se encuentra el archivo src/index.js dicho archivo es donde podremos observar todo los endpoint solicitados y a donde podremos realizar las peticiones

EL primer enpoint es el registro de los clientes en OpenPay

endpoint http://localhost:5000/customers/ metodo : POST

recibe los siguientes parametros y si algun parametro hace falta retorna el mensaje.

![image](https://user-images.githubusercontent.com/38164483/114949572-ea29a900-9e16-11eb-8af6-1a1ff5b18cdd.png)
![image](https://user-images.githubusercontent.com/38164483/114949639-075e7780-9e17-11eb-8f1c-4bd1f4555241.png)

El siguiente endpoint es el de consultar los clientes que se encuentran en OpenPay

endpoint http://localhost:5000/customers/ metodo : GET

![image](https://user-images.githubusercontent.com/38164483/114949721-31179e80-9e17-11eb-8624-11ed86ba32d1.png)

El siguiente endpoint es el de actualizar un registro del cliente que se encuentra en OpenPay

endpoint http://localhost:5000/customers/<id del registro a modificar> metodo : GET

![image](https://user-images.githubusercontent.com/38164483/114949936-b56a2180-9e17-11eb-9784-cd6053578828.png)
![image](https://user-images.githubusercontent.com/38164483/114949990-c87cf180-9e17-11eb-86a3-102fb112679f.png)

las siguientes rutas son para poder crear usuarios y poder loguearse en el sistema existen 3 usuarios con los que se puede acceder pero igual esta el crud de dicha tabla para poder crear sus propios usuarios
![image](https://user-images.githubusercontent.com/38164483/114950130-0aa63300-9e18-11eb-9e10-2acfed70bc78.png)

 El primero endpoint es el de dar de alta los usuarios, si algun campo esta vacio de igual forma le retorna la alerta
 
 endpoint http://localhost:5000/usuarios/ metodo : POST

 ![image](https://user-images.githubusercontent.com/38164483/114950196-2e697900-9e18-11eb-81a3-e304f2ff5502.png)
 ![image](https://user-images.githubusercontent.com/38164483/114950275-4e00a180-9e18-11eb-8f1e-e5b5fdaa291a.png)

El siguiente enpoint es el de actializar informacion de los usuarios.

endpoint http://localhost:5000/usuarios/<id del registro> metodo : PUT

![image](https://user-images.githubusercontent.com/38164483/114950356-74bed800-9e18-11eb-808e-73cebb4f4937.png)
como vemos en la imagen pasamos el id y el campo a actiializar en este caso actualizamos el dato que creamos anteriormente.

El siguiente enpoint es el de consultar en este metodo de puede usar de dos formas ya sea consultar sobre uno espesifico o sobre toda la tabla

endpoint http://localhost:5000/usuarios/ metodo : GET
endpoint http://localhost:5000/usuarios/<id del registro> metodo : GET
  
primero consultamos sobre todos los registros
![image](https://user-images.githubusercontent.com/38164483/114950503-d2ebbb00-9e18-11eb-8b19-6bf58e12e1ef.png)

segunda forma de consulta pasamos el id del registro que necesitamos
![image](https://user-images.githubusercontent.com/38164483/114950534-e860e500-9e18-11eb-9b3f-7df4aebd7667.png)
enpointes

y por ultimo se creo un enpoint para poder realizar el login en el sistema pasamos el username y la contraseña para poder validar si existen

endpoint http://localhost:5000/usuarios/login/ metodo : POST

realizamos la pruueba con un usuario que no existe
![image](https://user-images.githubusercontent.com/38164483/114950699-37a71580-9e19-11eb-8966-c1764d96f6f8.png)

Realizamos la siguiente prueba con un usuario que si exista.
![image](https://user-images.githubusercontent.com/38164483/114950755-5a392e80-9e19-11eb-8055-72579c744ab9.png)






