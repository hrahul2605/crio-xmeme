import { getConnection } from "typeorm";
import { Meme } from "../../entity/Meme";
import config from '../../config';

const getMemesService = async () => {
  try {
    const result = await getConnection(config.DB_CONNECTION_NAME).getRepository(Meme)
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
