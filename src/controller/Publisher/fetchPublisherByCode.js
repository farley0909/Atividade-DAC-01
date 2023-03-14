import { db } from "../../db.js";

export async function fetchPublisherByCode(codigo){
    try {
        let result = await db.editora.findUnique({
            where:{
                codigo:parseInt(codigo)
            }
        }) 
        return {data:result, has_error: false}  
    } catch (err) {
       return {data:err.message, has_error: true} 
    }
}