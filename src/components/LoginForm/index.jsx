import { useState } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

const LOGIN_FOR_REG_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[\d]).{8,32}$/,
};

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const calcInputClassNames = (name, value) => {
    const isValueValid = LOGIN_FOR_REG_EXP[name].test(value);
    return classNames(styles.fromInput, {
      [styles.validInput]: isValueValid,
      [styles.invalidInput]: !isValueValid,
    });
  };

  const isSubmitBtnDisabled = () => {
    return !(
      LOGIN_FOR_REG_EXP.email.test(email) &&
      LOGIN_FOR_REG_EXP.password.test(password)
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Email</span>
          <input
            className={calcInputClassNames("email", email)}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="youremail@mail"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>Password</span>
          <input
            className={calcInputClassNames("password", password)}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            autoFocus
          />
        </label>
        <button
          className={styles.submitBtn}
          disabled={isSubmitBtnDisabled()}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
