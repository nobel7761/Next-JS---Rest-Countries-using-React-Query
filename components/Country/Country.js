import React from "react";
import styles from "./Country.module.css";

const Country = (props) => {
  // const { name } = props.country;
  return (
    <div className={styles.country}>
      <img src={props.country.flags.png} alt="country" />
      <h3>{props.country.name.common}</h3>
      {props.country.capital ? (
        <p>
          Capital: <small>{props.country.capital}</small>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Country;
