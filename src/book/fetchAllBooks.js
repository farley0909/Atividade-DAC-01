import { db } from "../db.js";

export async function fetchAllBooks() {
  try {
    let result = await db.livro.findMany({});
    return { data: result, has_error: false };
  } catch (err) {
    return { data: err.message, has_error: true };
  }
}
