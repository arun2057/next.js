import { useState } from "react";
import Chat from "./chat/Chat";
import Conversation from "./conversation/Conversation";
import styles from "./Messenger.module.css";

const Messenger = () => {
  const [connectedUser, setConnectedUser] = useState("");
  const [conservationInfo, setConservationInfo] = useState({});
  return (
    <div className={styles.container}>
      <Conversation
        setConnectedUser={setConnectedUser}
        setConservationInfo={setConservationInfo}
      />
      <Chat connectedUser={connectedUser} conservationInfo={conservationInfo} />
    </div>
  );
};

export default Messenger;
