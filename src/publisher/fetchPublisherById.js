import { db } from "../db.js";

export async function fetchPublisherById(id) {
  return await db.publisher.findUnique({
    where: { id: parseInt(id) },
  });
}
