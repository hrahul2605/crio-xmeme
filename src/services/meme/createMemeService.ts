import { getConnection } from "typeorm";
import { Meme } from "../../entity/Meme";
import config from "../../config";

interface serviceParams {
  url: any;
  caption: any;
  name: any;
}

interface serviceReturnType extends serviceParams {
  created: boolean;
  id: number;
}

const createMemeService = async (
  data: serviceParams
): Promise<serviceReturnType> => {
  try {
    const connection = getConnection(config.DB_CONNECTION_NAME).getRepository(
      Meme
    );
    const meme = connection.create(data);
    const existingMeme = await connection.findOne({
      url: data.url,
      name: data.name,
      caption: data.caption,
    });

    if (existingMeme) return { ...existingMeme, created: false };
    const savedMeme = await connection.save(meme);
    return { ...savedMeme, created: true };
  } catch (err) {
    throw new Error(err);
  }
};

export default createMemeService;
