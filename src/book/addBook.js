import { db } from "../db.js";

export async function addBook({ title, releaseDate }) {
  return await db.book.create({
    data: {
      title,
      releaseDate: new Date(releaseDate),
    },
  });
}
