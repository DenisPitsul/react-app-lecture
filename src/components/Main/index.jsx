import styles from "./Main.module.css";

function Main({ isLogin, user: { specOffers } }) {
  return (
    <main>
      {/* <p className={isLogin ? styles.unloginedOffer : ""}>
        {isLogin ? specOffers : "Register for up to -50%"}
      </p> */}
      {isLogin && <p>{specOffers}</p>}
    </main>
  );
}

export default Main;
