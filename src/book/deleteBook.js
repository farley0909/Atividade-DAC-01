import { db } from "../db.js";

export async function deleteBook(id) {
  try {
    let result = await db.book.delete({ where: { id: parseInt(id) } });
    return { data: "book has been removed", has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
