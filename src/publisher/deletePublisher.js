import { db } from "../db.js";

export async function deletePublisher(code) {
  try {
    let result = await db.publisher.delete({
      where: { code: parseInt(code) },
    });
    return { data: "publisher has been removed", has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
