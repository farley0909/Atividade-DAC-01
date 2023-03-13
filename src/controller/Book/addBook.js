import {db} from '../../db.js'
export async function saveBook(data){
    try {
        let response = await db.livro.create({
            data:{
                titulo:data.titulo,
                dataDeLancamento:new Date(data.dataDeLancamento)
            }
        })
        return ({data: response, has_error:false})
    } catch (error) {
        return ({data: error.message, has_error:true})
    }
}