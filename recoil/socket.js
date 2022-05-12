import { atom, selector } from "recoil";
import { io } from "socket.io-client";
const conn = io("ws://localhost:9000");

const getSocket = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return JSON.parse(localStorage.getItem("socket")) || null;
  }
};
export const connectSocket = atom({
  key: "connectSocket",
  default: getSocket(),
});

export const connect = selector({
  key: "connect",
  set: ({ set }, newValue) => {
    set(connectSocket, newValue);
    //localStorage.setItem("socket", JSON.stringify(newValue));
  },
  get: ({ get }) => get(connectSocket),
});
