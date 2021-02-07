import { getConnection } from "typeorm";
import { Meme } from "../../entity/Meme";
import config from "../../config";

interface serviceParams {
  id: string;
  url: string;
  caption: string;
}

const updateMemeService = async (data: serviceParams) => {
  try {
    const id = parseInt(data.id, 10);
    const repo = getConnection(config.DB_CONNECTION_NAME).getRepository(Meme);

    // Existing meme based on ID
    const existing = await repo.findOne(id);

    // Final Meme after update
    const finalMeme = {
      url: data.url || existing.url,
      caption: data.caption || existing.caption,
      name: existing.name,
    };

    // Duplicate meme based on Final Meme
    const duplicate = await repo.findOne(finalMeme);

    // Checks if updated value becomes duplicate
    if (duplicate) {
      // Check if found duplicate is same as existing meme i.e. nothing is changed
      if (duplicate.id === existing.id)
        return { duplicate: true, same: true, updated: false };

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
