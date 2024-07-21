import React from "react";
import styles from "./UsersPage.module.css";
import FilterPanel from "./FilterPanel";
import UsersList from "./UsersList";

function UsersPage() {
  return (
    <section>
      <h1>Users List</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.filterContainer}>
          <FilterPanel />
        </div>
        <div className={styles.listContainer}>
          <UsersList />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
