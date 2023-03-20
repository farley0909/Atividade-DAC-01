import { db } from "../db.js";

export async function fetchBookById(id) {
  try {
    let result = await db.book.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return { data: result, has_error: false };
  } catch (err) {
    return { data: err.message, has_error: true };
  }
}
