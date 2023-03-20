import { db } from "../db.js";
import { formatDate } from "../util/formatDate.js";

export async function updateBook(data) {
  try {
    let result = await db.book.update({
      where: {
        id: parseInt(data.id),
      },
      data: {
        title: data.title,
        releaseDate: new Date(formatDate(data.releaseDate)),
      },
    });
    return { data: result, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
