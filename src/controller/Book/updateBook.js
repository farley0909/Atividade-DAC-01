import { db } from "../../db.js";
import { formatDate } from "../../util/formatDate.js";

export async function updateBook(data){
    try {
        let result = await db.livro.update({
            where:{
                id:parseInt(data.id)
            }, data:{
                titulo:data.titulo,
                dataDeLancamento:new Date(formatDate(data.dataDeLancamento))
            }
        })
        return {data:result, has_error:false}
    } catch (error) {
        return {data:error.message, has_error:true}
    }
}