import axios from "axios";
axios.defaults.withCredentials = true;
export const loginWithJwt = async (email, password) => {
  console.log(email, password);
  return await axios.post(
    `/api/auth/login
  `,
    { email, password }
  );
};
