const { default: axios } = require("axios");

let x = 0;

const generateRandomData = () => {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()!";
  const rand1 = Math.floor(Math.random() * CHARACTERS.length);
  const rand2 = Math.floor(Math.random() * CHARACTERS.length);
  const rand3 = Math.floor(Math.random() * CHARACTERS.length);

  return {
    name: CHARACTERS[rand1]+CHARACTERS[rand2]+CHARACTERS[rand3],
    url: CHARACTERS[rand2]+CHARACTERS[rand3]+CHARACTERS[rand1],
    caption: CHARACTERS[rand3]+CHARACTERS[rand1]+CHARACTERS[rand2],
  };
};

const postData = async () => {
  try {
    const data = generateRandomData();
    const res = await axios({
      method: "POST",
      url: "http://localhost:5000/memes",
      params: data,
    });

    if (res.data.id) x++;
    if (x === 1000) return;
    await postData();
  } catch (err) {
    console.log(err);
    await postData();
  }
};

postData();
