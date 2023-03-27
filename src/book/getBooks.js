import { db } from "../db.js";

export async function getBooks(search) {
  if (search) {
    return await db.book.findMany({ where: { title: { search } } });
  }
  return await db.book.findMany();
}
