import TinyAvatar from "../../avatar/tiny/TinyAvatar";
import styles from "./Message.module.css";

const Message = ({ message, own }) => {
  return (
    <div className={own ? `${styles.message} ${styles.own}` : styles.message}>
      <div className={styles.messageTop}>
        <div>
          <TinyAvatar />
        </div>
        <p className={styles.messageText}>{message}</p>
      </div>
      <div className={styles.messageBottom}>{"2 days ago"}</div>
    </div>
  );
};

export default Message;
