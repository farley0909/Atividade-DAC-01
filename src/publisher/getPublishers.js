import { db } from "../db.js";

export async function getPublishers(search) {
  if (search) {
    return await db.publisher.findMany({ where: { fantasyName: { search } } });
  }
  return await db.publisher.findMany();
}
