import { db } from "../db.js";

export async function fetchAllPublisher() {
  try {
    let result = await db.publisher.findMany({});
    return { data: result, has_error: false };
  } catch (err) {
    return { data: err.message, has_error: true };
  }
}
