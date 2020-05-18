import Axios from "axios";
import igdb from "../../config/igdb";

const api = Axios.create({
  baseURL: "https://api-v3.igdb.com",
  headers: {
    "user-key": igdb.key
  }
});

export default api;
