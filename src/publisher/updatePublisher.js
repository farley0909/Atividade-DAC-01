import { db } from "../db.js";

export async function updatePublisher({ id, fantasyName, originPlace }) {
  return await db.publisher.update({
    where: { id: parseInt(id) },
    data: { originPlace, fantasyName },
  });
}
