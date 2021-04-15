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

exports.consultar=consultar
exports.consultarById=consultarById