import SmallAvatar from "../../avatar/small/SmallAvatar";
import { MenuIcon } from "@heroicons/react/outline";
import { PaperClipIcon } from "@heroicons/react/outline";
import styles from "./Chat.module.css";
import TinyAvatar from "../../avatar/tiny/TinyAvatar";
import { useRecoilValue } from "recoil";
import { user } from "../../../recoil/auth";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../../context/SocketProvider";
import { useAppContext } from "../../../context/state";
import Message from "../message/Message";

/**
 *
 * @returns chat header section
 * chat header section contains avatar and name
 * avatar is a small avatar
 *
 */
const ChatHeader = ({ connectedUser }) => {
  return (
    <div className={styles.chat__header__section}>
      <div className={styles.chat__header__avatar}>
        <SmallAvatar />
        <span className={styles.chat__header__name}>{connectedUser.name}</span>
      </div>
      <MenuIcon className={styles.MenuIcon} />
    </div>
  );
};

/**
 *
 * @returns chat footer section
 * chat footer section contains message input and send button
 * message input is a textarea
 */
const ChatFooter = ({ text, setText, sendMessage }) => {
  return (
    <div className={styles.chat__footer__section}>
      <div className={styles.chat__footer__top__section}>
        <div className={styles.input__container}>
          <input
            className={styles.text__input}
            placeholder=' @Say anything'
            name='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.icons__container}>
          <PaperClipIcon className={styles.paperclip__icon} />
          <img
            src={"./images/WHITE/PNG/DOLLAR FILLED.png"}
            className={styles.message__icon}
          />

          <img
            src={"./images/WHITE/PNG/SEND 2.png"}
            className={styles.message__icon}
            onClick={(e) => sendMessage()}
          />
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @returns main chatting section
 * main chatting section contains chat header and chat footer
 *
 */

const Chat = ({ connectedUser, conservationInfo }) => {
  const [text, setText] = useState("");
  const socket = useAppContext();
  const authUser = useRecoilValue(user);
  const [messages, setMessages] = useState([]);
  const roomId = conservationInfo._id;
  // console.log(roomId);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      console.log("data", data.text);
      setMessages((prev) => {
        return [...prev, data];
      });
      console.log("messages", data);
    });
    return () => socket.off("getMessage");
  }, []);

  const sendMessage = () => {
    if (!text) {
      return;
    }
    const date = new Date();
    const data = {
      text,
      date,
    };
    setMessages((prev) => {
      return [...prev, data];
    });
    socket.emit("sendMessage", {
      senderId: authUser._id,
      receiverId: connectedUser._id,
      text: text,
    });
    setText("");

    // saveNewMessage({
    //   sender: authUser._id,
    //   receiver: connectedUser._id,
    //   conversationId: conservationInfo._id,
    //   text: text,
    // })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };
  // console.log(" connectedUser", connectedUser);
  // console.log(" conservationInfo", conservationInfo);

  return (
    <div className={styles.container}>
      <div className={styles.chat__content__section}>
        {messages.map((message) => {
          return (
            <Message
              own={message.sender ? false : true}
              key={message.date}
              message={message.text}
            />
          );
        })}
      </div>
      <ChatFooter text={text} setText={setText} sendMessage={sendMessage} />
    </div>
  );
};
// <Message />
//         <Message own={true} />
//         <Message own={true} />
export default Chat;
// <ChatHeader connectedUser={connectedUser} />
//
