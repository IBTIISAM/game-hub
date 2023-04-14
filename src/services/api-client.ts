import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cf780494d1ad4e3a802806b49627f6fd",
  },
});
