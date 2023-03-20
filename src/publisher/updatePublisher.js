import { db } from "../db.js";

export async function updatePublisher(data) {
  try {
    let result = await db.editora.update({
      where: {
        codigo: parseInt(data.codigo),
      },
      data: {
        localDeOrigem: data.localDeOrigem,
        nomeFantasia: data.nomeFantasia,
      },
    });
    return { data: result, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
