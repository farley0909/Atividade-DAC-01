import { db } from "../db.js";

export async function fetchBookById(id) {
  return await db.book.findUnique({
    where: { id: parseInt(id) },
  });
}
