import { useState, useRef } from "react";
import { loginWithJwt } from "../../../function/login";
import styles from "./Login.module.css";
import { useSetRecoilState } from "recoil";
import { login, user } from "../../../recoil/auth";
import { useRouter } from "next/router";
import Image from "next/image";
import { DEVILHEAD_ICON } from "../../../function/image";
const Login = () => {
  const [showPassword, SetShowPassword] = useState(false);
  const setLogin = useSetRecoilState(login);
  const email = useRef(null);
  const password = useRef(null);
  const router = useRouter();

  /**
   *
   * @param accept email and password
   * @param response - accepts the response from the server
   * push response data in recoil state
   * redirect to home page
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithJwt(email.current.value, password.current.value)
      .then((res) => {
        const userInfo = {
          _id: res.data.user._id,
          name: res.data.user.name,
          email: res.data.user.email,
          username: res.data.user.username,
          role: res.data.user.role,
        };
        setLogin(userInfo);
        router.push("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image src={DEVILHEAD_ICON} />
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__group}></div>
        <div className={styles.form__buttom}>
          <button type='submit' className={styles.button}>
            LOGIN
          </button>
          <span> don't have account ? signup</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
// <input
// className={styles.input}
// name='email'
// ref={email}
// type='text'
// placeholder='Username'
// />
// <input
// className={styles.input}
// name='password'
// type='password'
// ref={password}
// placeholder='Username'
// />
// <button type='submit' className={styles.button}>
// Login
// </button>
