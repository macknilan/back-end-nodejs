const database= require('../../conexiones/conexiones');

async function consultar() {
    const insert="select * from Def_Usuarios";
    let resultados = await new Promise((resolve, reject) => {
        database.db.all(insert,[],(error,rows)=>{
            if(error){
                throw error;        
            }else{
                resolve(rows)
            }
        });
    })
    return resultados
}
async function consultarById(id) {
    const insert="select * from Def_Usuarios where idDef_Usuarios="+id;
    let resultados = await new Promise((resolve, reject) => {
        database.db.all(insert,[],(error,rows)=>{
            if(error){
                throw error;        
            }else{
                resolve(rows)
            }
        });
    })
    return resultados
}
async function login(datos) {
    const mensaje={
        error:false,
        msg:[]
    };
    if(datos.usuario == undefined || datos.usuario == ''){
        mensaje.msg.push('agregar el usuario');
        mensaje.error=true;
    }
    if(datos.contrasena == undefined || datos.contrasena == ''){
        mensaje.msg.push('agregar el contraseña');
        mensaje.error=true;
    }
    if(mensaje.error){
        return mensaje
    }
    const consultar="select * from Def_Usuarios where Nombre='"+datos.usuario+"' and Contrasena='"+datos.contrasena+"'";
    let resultados = await new Promise((resolve, reject) => {
        database.db.all(consultar,[],(error,rows)=>{
            if(error){
                resolve(false);
            }else{
                if(rows.length!=0){
                    resolve(true)
                }else{
                    resolve(false)
                }
            }
        });
    })
    return resultados
}

exports.consultar=consultar
exports.login=login
exports.consultarById=consultarById