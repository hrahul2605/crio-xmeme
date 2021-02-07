import { getConnection } from "typeorm";
import { Meme } from "../../entity/Meme";
import config from "../../config";

const getMemeService = async (id: number) => {
  try {
    const connection = getConnection(config.DB_CONNECTION_NAME).getRepository(Meme);
    const result = await connection.findOne(id);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default getMemeService;
