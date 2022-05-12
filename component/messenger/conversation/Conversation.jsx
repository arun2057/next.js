import styles from "./conversation.module.css";
import Image from "next/image";
import { DISLIKE_WHITE_ICON, LIKE_WHITE_ICON } from "../../../function/image";
import SmallAvatar from "../../avatar/small/SmallAvatar";
import { useRecoilState } from "recoil";
import { user } from "../../../recoil/auth";
import { useEffect, useState } from "react";
import { getUsers } from "../../../function/user";
import axios from "axios";
import { setConversation } from "../../../function/message";
axios.defaults.withCredentials = true;

const Conversation = ({ setConnectedUser, setConservationInfo }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => setUsers(res.data.user));
    return () => {
      getUsers;
    };
  }, []);

  const connectTwoUsers = async (receiver) => {
    setConnectedUser(receiver);
    setConversation({ senderId: user._id, receiverId: receiver._id })
      .then((res) => setConservationInfo(res.data.conversation))
      .catch((err) => console.log(err.response));
  };

  const UserInfo = ({ user, active }) => {
    return (
      <div
        className={`${styles.user} ${active == true && styles.active}`}
        onClick={() => connectTwoUsers(user)}>
        <div className={styles.user__avatar}>
          <SmallAvatar />
        </div>
        <div className={styles.user__info}>
          <div className={styles.row}>
            <span className={styles.user__name}>{user.name}</span>
            <span className={styles.recent__msg__time}>Today, 1PM</span>
          </div>

          <span className={styles.recent__message}>Hello 😍😎</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.top__section}>
        <div className={styles.dms__section}>
          <span className={styles.dms__title}>DMs</span>
          <div className={styles.notification__image__container}>
            <Image src={DISLIKE_WHITE_ICON} width='20px' height={"20px"} />
          </div>
        </div>

        <div className={styles.search__section}>
          <img
            src={"./images/WHITE/PNG/SEARCH.png"}
            className={styles.search__icon}
          />
          <input type='text' placeholder='Search for chats' />
        </div>
      </div>
      <div className={styles.bottom__section}>
        {users.map((user) => {
          return <UserInfo key={user._id} user={user} active={false} />;
        })}
      </div>
    </div>
  );
};

export default Conversation;
