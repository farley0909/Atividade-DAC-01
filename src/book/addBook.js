import { db } from "../db.js";
import { formatDate } from "../util/formatDate.js";
export async function addBook(data) {
  try {
    let response = await db.book.create({
      data: {
        title: data.title,
        releaseDate: new Date(formatDate(data.releaseDate)),
      },
    });
    return { data: response, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
