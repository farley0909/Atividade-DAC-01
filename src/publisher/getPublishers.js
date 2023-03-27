import { db } from "../db.js";

export async function getPublishers() {
  return await db.publisher.findMany({});
}
