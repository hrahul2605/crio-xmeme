import { getRepository } from "typeorm";
import { Meme } from "../../entity/Meme";

const getMemeService = async (id: number) => {
  try {
    const connection = getRepository(Meme);
    const result = await connection.findOne(id);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

export default getMemeService;
