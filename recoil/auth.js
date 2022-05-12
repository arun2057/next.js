import { atom, selector } from "recoil";
const getUser = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    return JSON.parse(localStorage.getItem("userInfo")) || null;
  }
};
export const user = atom({
  key: "user",
  default: getUser(),
});

export const login = selector({
  key: "login",
  set: ({ set }, newValue) => {
    set(user, newValue);
    localStorage.setItem("userInfo", JSON.stringify(newValue));
  },
  get: ({ get }) => get(user),
});

export const logout = selector({
  key: "logout",
  set: ({ set }) => set(null),
  get: ({ get }) => get(null),
});
