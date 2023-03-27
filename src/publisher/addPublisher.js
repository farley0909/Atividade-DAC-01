import { db } from "../db.js";

export async function addPublisher({ fantasyName, originPlace }) {
  return await db.publisher.create({
    data: { fantasyName, originPlace },
  });
}
