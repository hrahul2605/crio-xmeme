import { getRepository } from "typeorm";
import { Meme } from "../../entity/Meme";

interface serviceParams {
  id: string;
  url: string;
  caption: string;
}

const updateMemeService = async (data: serviceParams) => {
  try {
    const id = parseInt(data.id, 10);
    const repo = getRepository(Meme);

    const duplicate = await repo.findOne({ url: data.url });
    const existing = await repo.findOne(id);

    // Checks if updated value becomes duplicate
    if (duplicate && existing) {
      if (
        duplicate.name === existing.name &&
        duplicate.caption === data.caption
      )
        return { duplicate: true, updated: false };
    }

    // Handles update
    if (existing) {
      await repo.save({
        id,
        url: data.url,
        caption: data.caption,
      });
      return { duplicate: false, updated: true };
    }

    // Value with id doesnot exist
    return { duplicate: false, updated: false };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateMemeService;
