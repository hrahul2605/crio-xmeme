import { getConnection } from "typeorm";
import { Meme } from "../../entity/Meme";

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
    const connection = getConnection().getRepository(Meme);
    const meme = connection.create(data);
    const existingMeme = await connection.findOne({
      url: data.url,
    });

    if (
      existingMeme &&
      existingMeme.name === meme.name &&
      existingMeme.caption === meme.caption
    )
      return { ...existingMeme, created: false };
    const savedMeme = await connection.save(meme);
    return { ...savedMeme, created: true };
  } catch (err) {
    throw new Error(err);
  }
};

export default createMemeService;
