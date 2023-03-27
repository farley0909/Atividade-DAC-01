import { db } from "../db.js";

export async function fetchPublisherById(id) {
  try {
    let result = await db.publisher.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return { data: result, has_error: false };
  } catch (err) {
    return { data: err.message, has_error: true };
  }
}
