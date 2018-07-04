import axios from "axios";
import md5 from "md5";

export default name => {
  const ts = new Date().getTime;
  const publicKey = "a45c56549637f913cb8e6eab21585e8e";
  const privateKey = "cd2719a13122a97c86947231e19d49c44d1dc7b2";
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const marvelAPI = "https://gateway.marvel.com/v1/public";
  const heroName = name;

  const instance = axios.create({
    baseURL: `${marvelAPI}/characters?nameStartsWith=${heroName}&apikey=${publicKey}&hash=${hash}`,
    timeout: 10000
  });

  instance
    .get()
    .then(data => console.log(data.data.data.results))
    .catch(error => console.log(error));
}
