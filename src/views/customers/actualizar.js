const openpay= require('../../conexiones/conexion');

async function actualizar(id,columns){
    const mensaje={
        error:false,
        msg:[]
    };
    var new_estructure=
        {
            "name": "",
            "email": "",
            "last_name": "",
            'address':{
                "city": "",
                "state": "",
                "line1": "",
                "line2": "",
                "postal_code": "",
                "country_code": "",
            },
            "phone_number": ""
        }
        if(columns.name == undefined || columns.name == ''){
            mensaje.msg.push('agregar el nombre');
            mensaje.error=true;
        }else{
            new_estructure.name=columns.name;
        }
        if(columns.email == undefined || columns.email == ''){
            mensaje.msg.push('agregar el correo');
            mensaje.error=true;
        }else{
            new_estructure.email=columns.email;
        }
        if(columns.last_name == undefined || columns.last_name == ''){
            mensaje.msg.push('agregar el apellido');
            mensaje.error=true;
        }else{
            new_estructure.last_name=columns.last_name;
        }
        if(columns.phone_number != undefined || columns.phone_number != ''){
            new_estructure.phone_number=columns.phone_number;
        }
        if(columns.city != undefined || columns.city != ''){
            new_estructure.address.city=columns.city;
        }
        if(columns.state != undefined || columns.state != ''){
            new_estructure.address.state=columns.state;
        }
        if(columns.line1 != undefined || columns.line1 != ''){
            new_estructure.address.line1=columns.line1;
        }
        if(columns.line2 != undefined || columns.line2 != ''){
            new_estructure.address.line2=columns.line2;
        }
        if(columns.postal_code != undefined || columns.postal_code != ''){
            new_estructure.address.postal_code=columns.postal_code;
        }
        if(columns.country_code != undefined || columns.country_code != ''){
            new_estructure.address.country_code=columns.country_code;
        }
        if(mensaje.error){
            return mensaje
        }
    let resultados_update = await new Promise((resolve, reject) => {
        openpay.openpay.customers.update(id,new_estructure,(error,rows)=>{
            if(error){
                resolve(error);
            }else{
                resolve(rows)
            }
        });
    })
    
    return resultados_update
}
exports.actualizar=actualizar