import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>KAWAII SUSHI</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Japanese Cuisine" />
      </div>
    </React.Fragment>
  );
};

export default Header;
