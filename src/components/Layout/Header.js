import { Fragment } from "react";
import headerImage from "../../assets/header.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Pizza Delivery</h1>
        <button> Carrello </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Pizza Napoletana" />
      </div>
    </Fragment>
  );
};

export default Header;
