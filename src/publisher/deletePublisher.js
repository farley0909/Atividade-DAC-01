import { db } from "../db.js";

export async function deletePublisher(id) {
  try {
    let result = await db.publisher.delete({
      where: { id: parseInt(id) },
    });
    return { data: "publisher has been removed", has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
