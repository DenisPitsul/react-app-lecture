import { createContext, useContext, useState } from "react";
import Counter from "./components/Counter";
// import Header from "./components/Header";
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import CategoriesList from "./components/CategoriesList";
import LoginForm from "./components/LoginForm";
import Weather from "./components/Weather";
import UsersPage from "./pages/UsersPage";
import { UserContext } from "./contexts/index,js";
import UserPage from "./pages/UserPage";

// const DataContext = createContext("def data");

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

  // const [data, setData] = useState("app data");
  const [user, setUser] = useState({
    userSrc:
      "https://shotkit.com/wp-content/uploads/2021/06/Cool-profile-picture-LinkedIn.jpg",
    firstName: "Test",
    lastName: "Testovich",
  });

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
    // <UsersPage />
    // <DataContext.Provider value={data}>
    //   <Child />
    // </DataContext.Provider>
    <UserContext.Provider value={user}>
      <UserPage />
    </UserContext.Provider>
  );
}

// function Child() {
//   return <ChildChild />;
// }

// function ChildChild() {
//   const data = useContext(DataContext);

//   return <div>{data}</div>;
// }

export default App;
