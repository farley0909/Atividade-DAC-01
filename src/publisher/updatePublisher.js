import { db } from "../db.js";

export async function updatePublisher(data) {
  try {
    let result = await db.publisher.update({
      where: {
        code: parseInt(data.code),
      },
      data: {
        originPlace: data.originPlace,
        fantasyName: data.fantasyName,
      },
    });
    return { data: result, has_error: false };
  } catch (error) {
    return { data: error.message, has_error: true };
  }
}
