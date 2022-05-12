import Image from "next/image";
import { DEVILHEAD_ICON } from "../../function/image";
import { FULL__LOGO } from "../../function/image";
import styles from "./Nav.module.css";
import { SearchIcon } from "@heroicons/react/solid";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={FULL__LOGO} />
      </div>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='Search Anything'
          className={styles.searchbar}
        />
        <SearchIcon className={styles.SearchIcon} />
      </div>
      <div className={styles.login}>
        <button className={styles.loginbtn}>Log In</button>
      </div>
    </div>
  );
};

export default Nav;
