import Image from "next/image";

import styles from "./TinyAvatar.module.css";

const TinyAvatar = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.avatar__image}`}>
        <img
          src={"./DEVILHEAD LOGO.png"}
          className={`${styles.devil__head} `}
        />
        <img
          className={`${styles.user__image}`}
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          }
        />
      </div>
    </div>
  );
};

export default TinyAvatar;
