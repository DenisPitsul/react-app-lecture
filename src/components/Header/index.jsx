import logoImg from "./logo.png";
import userPhoto from "./userPhoto.jpg";
import styles from "./Header.module.css";

function Header({ isLogin }) {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logoImg} src={logoImg} alt="" />
      <h1>Page Title</h1>

      {isLogin ? (
        <img className={styles.userImg} src={userPhoto} alt="" />
      ) : (
        <div>
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      )}
    </header>
  );
}

export default Header;
