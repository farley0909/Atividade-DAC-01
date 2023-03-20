import { db } from "../db.js";

export async function addPublisher(data) {
  try {
    let result = await db.editora.create({
      data: {
        nomeFantasia: data.nomeFantasia,
        localDeOrigem: data.localDeOrigem,
      },
    });
    return { data: result, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
