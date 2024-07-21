import queryString from "query-string";

const BASE_URL = "https://randomuser.me/api/";

export const loadUsers = (options) => {
  const defaultOptions = {
    currentPage: 1,
    results: 10,
    seed: "pe2024",
  };

  const resultOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(`${BASE_URL}?${queryString.stringify(resultOptions)}`).then(
    (response) => response.json()
  );
};
