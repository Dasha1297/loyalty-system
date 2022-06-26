import axios from "axios";

export const api = axios.create({
  baseURL: "https://bonus-test.evoapp.ru/api/3rdparty",
  headers: {
    Authorization: "a826f197-299a-4644-93f0-2ee5098505a3",
  },
});
