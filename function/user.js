import axios from "axios";
axios.defaults.withCredentials = true;
export const getUsers = async () => {
  return await axios.get("/api/user/alluser");
};
