import { db } from "../db.js";

export async function fetchPublisherByCode(code) {
  try {
    let result = await db.publisher.findUnique({
      where: {
        code: parseInt(code),
      },
    });
    return { data: result, has_error: false };
  } catch (err) {
    return { data: err.message, has_error: true };
  }
}
