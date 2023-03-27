import { db } from "../db.js";

export async function getBooks() {
  return await db.book.findMany({});
}
