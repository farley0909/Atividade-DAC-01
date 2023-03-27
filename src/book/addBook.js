import { db } from "../db.js";
import { formatDate } from "../util/formatDate.js";
export async function addBook(data) {
  return await db.book.create({
    data: {
      title: data.title,
      releaseDate: new Date(data.releaseDate),
    },
  });
}
