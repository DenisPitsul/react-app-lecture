import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import CategoriesList from "./components/CategoriesList
import LoginForm from "./components/LoginForm";
import Weather from "./components/Weather";
import UsersPage from "./pages";

function App() {
  // const [isLight, setIsLight] = useState(true);

  // const isLogin = true;
  // const user = {
  //   specOffers: "You have -20% for all laptops",
  // };

  // const buttonStyle = {
  //   color: isLight ? "yellow" : "grey",
  // };

  // const pageContainerStyle = {
  //   minHeight: "100vh",
  //   color: isLight ? "black" : "white",
  //   backgroundColor: isLight ? "white" : "black",
  // };

  // function changeTheme() {
  //   setIsLight((oldIsLight) => !oldIsLight);
  // }

  // const numbers = [1, 2, 3, 4, 5];

  // const numbersList = numbers.map((n, index) => <li key={index}>{n}</li>);

  return (
    // <div style={pageContainerStyle}>
    //   <Header isLogin={isLogin} />
    //   <button style={buttonStyle} onClick={changeTheme}>
    //     <i className="fa-solid fa-sun"></i>
    //   </button>
    //   <Main isLogin={isLogin} user={user} />
    //   <Counter />
    // </div>
    // <ul>{numbersList}</ul>
    // <NavLinks></NavLinks>
    // <CategoriesList />
    // <LoginForm />
    // <Weather />
    <UsersPage />
  );
}

export default App;
