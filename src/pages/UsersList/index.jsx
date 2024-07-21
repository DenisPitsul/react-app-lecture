import React, { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import { PacmanLoader } from "react-spinners";
import { loadUsers } from "../../api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState(10);

  useEffect(() => {
    const savedPage = Number(window.localStorage.getItem("page"));
    if (savedPage) {
      setCurrentPage(savedPage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("page", currentPage);
  }, [currentPage]);

  useEffect(() => {
    return () => {
      window.localStorage.setItem("page", currentPage);
    };
  }, [currentPage]);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    loadUsers({ currentPage, results })
      .then(({ results }) => setUsers(results))
      .catch((e) => setError(e))
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const onPreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const onNextClick = () => {
    setCurrentPage((page) => page + 1);
  };

  return (
    <>
      <button onClick={onPreviousClick} disabled={currentPage === 1}>
        {"<"}
      </button>
      <div>{currentPage}</div>
      <button onClick={onNextClick}>{">"}</button>
      <ul>
        {error && <div style={{ error: "red" }}>Error !!!</div>}
        {isFetching && <PacmanLoader color="green" speedMultiplier={1} />}
        {!isFetching &&
          !error &&
          users.map((user) => (
            <li key={user.id.value}>
              {Object.keys(user).map((key) => (
                <p key={key}>
                  {key}: {JSON.stringify(user[key])}
                </p>
              ))}
            </li>
          ))}
      </ul>
    </>
  );
}

export default UsersList;
