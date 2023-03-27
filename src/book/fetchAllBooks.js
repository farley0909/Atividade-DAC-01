import { db } from "../db.js";

export async function fetchAllBooks() {
  return await db.book.findMany({});
}
