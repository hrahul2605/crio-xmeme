import { getRepository } from "typeorm";
import { Meme } from "../../entity/Meme";

const getMemesService = async () => {
  try {
    const result = await getRepository(Meme)
      .createQueryBuilder("meme")
      .limit(100)
      .addOrderBy("meme.updatedAt", "DESC")
      .getMany();

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default getMemesService;
