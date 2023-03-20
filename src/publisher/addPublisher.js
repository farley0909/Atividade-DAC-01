import { db } from "../db.js";

export async function addPublisher(data) {
  try {
    let result = await db.publisher.create({
      data: {
        fantasyName: data.fantasyName,
        originPlace: data.originPlace,
      },
    });
    return { data: result, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
