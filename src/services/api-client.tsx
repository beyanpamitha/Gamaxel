import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3a1b0eaa2b44d8fbc6ae9debbe76d71",
  },
});
