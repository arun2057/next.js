import styles from "../styles/Home.module.css";

import Story from "../component/story/Story";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { user } from "../recoil/auth";
import Messenger from "../component/messenger/Messenger";
import { useEffect } from "react";
import { useAppContext } from "../context/state";
import { connect } from "../recoil/socket";
import { io } from "socket.io-client";
export default function Home() {
  const authUser = useRecoilValue(user);
  const socket = useAppContext();

  // useEffect(() => {
  //   const socket = io("ws://localhost:9000");
  //   setConnect(socket);
  // }, []);
  useEffect(() => {
    socket.emit("addUser", authUser?._id, authUser.username);
  }, [authUser]);

  return (
    <div className={styles.container}>
      <Story />

      <Messenger />
    </div>
  );
}
