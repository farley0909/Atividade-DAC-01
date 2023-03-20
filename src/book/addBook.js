import { db } from "../db.js";
import { formatDate } from "../util/formatDate.js";
export async function addBook(data) {
  try {
    let response = await db.livro.create({
      data: {
        titulo: data.titulo,
        dataDeLancamento: new Date(formatDate(data.dataDeLancamento)),
      },
    });
    return { data: response, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
