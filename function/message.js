import axios from "axios";
axios.defaults.withCredentials = true;

export const setConversation = async (data) => {
  const res = await axios.post(`/api/message/conversation`, data);
  return res;
};

export const getConversation = async (users) => {
  let response = await axios.post(`/api/conversation/get`, users);
  return response.data;
};

export const saveNewMessage = async (data) => {
  return await axios.post(`/api/message/add`, data);
};

export const getMessage = async (conservationId) => {
  return await axios.get(`/api/message/${conservationId}`);
};
