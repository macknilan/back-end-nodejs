const openpay= require('../../conexiones/conexion');

async function consultar() {
    let resultados = await new Promise((resolve, reject) => {
        openpay.openpay.customers.list({},(error,rows)=>{
            if(error){
                resolve(error);
            }else{
                resolve(rows)
            }
        });
    })
    return resultados
}
exports.consultar=consultar