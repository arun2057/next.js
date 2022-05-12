import {
  CREATE__POST__ICON,
  DEVILHEAD_WHITE_ICON,
  NOTIFICATION__ICON,
  SEARCH__ICON,
  WALLET__ICON,
} from "../../function/image";
import styles from "./Sidebar.module.css";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu__lists}>
        <div className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <Image src={DEVILHEAD_WHITE_ICON} />
          </div>
          <span className={styles.menu__text}>Profile</span>
        </div>

        <div className={styles.menu__item}>
          <div className={`${styles.menu__icon} ${styles.small__icon}`}>
            <Image src={CREATE__POST__ICON} />
          </div>
          <span className={`${styles.menu__text}  `}>Create Post</span>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <Image src={WALLET__ICON} />
          </div>
          <span className={styles.menu__text}>Wallet</span>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <Image src={NOTIFICATION__ICON} />
          </div>
          <span className={styles.menu__text}>Notification</span>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.menu__icon}>
            <Image src={SEARCH__ICON} />
          </div>
          <span className={styles.menu__text}>Search</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
