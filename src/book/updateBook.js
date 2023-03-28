import { db } from "../db.js";

export async function updateBook({ id, title, releaseDate }) {
  return await db.book.update({
    where: { id: parseInt(id) },
    data: { title, releaseDate: new Date(releaseDate) },
  });
}
