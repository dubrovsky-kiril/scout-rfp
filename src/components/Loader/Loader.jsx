import React from "react";
import styles from "./Loader.scss";

const Loader = () => {
  return (
    <div className={styles.lodaer_container}>
      <div className={styles.loader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
