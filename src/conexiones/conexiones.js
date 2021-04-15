const sqlite3=require('sqlite3').verbose();
const path=require('path');

const db_name=path.join("base/Datos.db");

const db= new sqlite3.Database(db_name,error=>{
    if(error){
        throw error
    }else{
        console.log('abierta la BD')
    }
})
const Def_Usuarios="CREATE TABLE IF NOT EXISTS Def_Usuarios(\
    idDef_Usuarios INTEGER PRIMARY KEY AUTOINCREMENT,\
    Nombre varchar(200)NOT NULL,\
    Contrasena varchar(200)NOT NULL,\
    Status TYNYIN(4) NOT NULL,\
    Fecha_Creacion DATETIME NOT NULL,\
    Usuario_Creacion varchar(100) NOT NULL,\
    Fecha_Ultima_Modificacion DATETIME NOT NULL,\
    Usuario_Ultima_Modificacion varchar(100) NOT NULL)";
db.run(Def_Usuarios,error=>{
    if(error){
        throw error
    }else{
        console.log('se creo la tabla Def_Usuarios')
    }
})

exports.db=db