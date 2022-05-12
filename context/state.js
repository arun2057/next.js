import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const socket = io("ws://localhost:9000");

  return <AppContext.Provider value={socket}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
