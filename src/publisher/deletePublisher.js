import { db } from "../db.js";

export async function deletePublisher(codigo) {
  try {
    let result = await db.editora.delete({
      where: { codigo: parseInt(codigo) },
    });
    return { data: "publisher has been removed", has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
