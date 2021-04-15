const openpay= require('../../conexiones/conexion');

async function insertar(datos) {
    const mensaje={
        error:false,
        msg:[]
    };
    try {
        var new_estructure=
        {
            "name": "",
            "email": "",
            "last_name": "",
            'adrees':{
                "city": "",
                "state": "",
                "line1": "",
                "line2": "",
                "postal_code": "",
                "country_code": "",
            },
            "phone_number": ""
        }
        if(datos.name == undefined || datos.name == ''){
            mensaje.msg.push('agregar el nombre');
            mensaje.error=true;
        }else{
            new_estructure.name=datos.name;
        }
        if(datos.email == undefined || datos.email == ''){
            mensaje.msg.push('agregar el correo');
            mensaje.error=true;
        }else{
            new_estructure.email=datos.email;
        }
        if(datos.last_name == undefined || datos.last_name == ''){
            mensaje.msg.push('agregar el apellido');
            mensaje.error=true;
        }else{
            new_estructure.last_name=datos.last_name;
        }
        if(datos.phone_number != undefined || datos.phone_number != ''){
            new_estructure.phone_number=datos.phone_number;
        }
        if(datos.city != undefined || datos.city != ''){
            new_estructure.adrees.city=datos.city;
        }
        if(datos.state != undefined || datos.state != ''){
            new_estructure.adrees.state=datos.state;
        }
        if(datos.line1 != undefined || datos.line1 != ''){
            new_estructure.adrees.line1=datos.line1;
        }
        if(datos.line2 != undefined || datos.line2 != ''){
            new_estructure.adrees.line2=datos.line2;
        }
        if(datos.postal_code != undefined || datos.postal_code != ''){
            new_estructure.adrees.postal_code=datos.postal_code;
        }
        if(datos.country_code != undefined || datos.country_code != ''){
            new_estructure.adrees.country_code=datos.country_code;
        }
        if(mensaje.error){
            return mensaje
        }
        let resultados = await new Promise((resolve, reject) => {
            openpay.openpay.customers.create(new_estructure, function(error, body) {
                if(error){
                    resolve(error)
                }else{
                    resolve(body)
                }
            });
        })
        return resultados
        // if(datos.nombre== undefined || datos.nombre==''){
        //     mensaje.push('agregar el nombre');
        // }
        // if(datos.codigo== undefined || datos.codigo==''){
        //     mensaje.push('agregar el codigo');
        // }
        // if(datos.precio== undefined || datos.precio==''){
        //     mensaje.push('agregar el precio');
        // }
        // if(datos.cantidad== undefined || datos.cantidad==''){
        //     mensaje.push('agregar el cantidad');
        // }
        // if(datos.status== undefined || datos.status==''){
        //     mensaje.push('agregar el status');
        // }    
        // if(datos.usuario_creacion== undefined || datos.usuario_creacion==''){
        //     mensaje.push('agregar el usuario_creacion');
        // }    
        // if(datos.usuario_modificacion== undefined || datos.usuario_modificacion==''){
        //     mensaje.push('agregar el usuario_modificacion');
        // }
        // if(mensaje!=""){
        //     throw mensaje;
        // }
        // const insert="INSERT INTO Op_Productos(\
        //             Nombre,\
        //             Codigo,\
        //             Precio,\
        //             Cantidad,\
        //             status,\
        //             Fecha_Creacion,\
        //             Usuario_Creacion,\
        //             Fecha_Ultima_Modificacion,\
        //             Usuario_Ultima_Modificacion)\
        //             VALUES(\
        //             '"+datos.nombre+"',\
        //             '"+datos.codigo+"',\
        //             '"+datos.precio+"',\
        //             '"+datos.cantidad+"',\
        //             '"+datos.status+"',\
        //             '"+util.getDateTime()+"',\
        //             '"+datos.usuario_creacion+"',\
        //             '"+util.getDateTime()+"',\
        //             '"+datos.usuario_modificacion+"')";
        // let resultados = await new Promise((resolve, reject) => {
        //     database.db.all(insert,[],(error)=>{
        //         if(error){
        //             throw error;        
        //         }else{
        //             resolve('se agrego de forma correcta')
        //         }
        //     });
        // })
        // return resultados   
    } catch (error) {
        return error;
    }
}

async function consultarById(id) {
    const insert="select * from Op_Productos where idOp_Productos="+id;
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
exports.insertar=insertar