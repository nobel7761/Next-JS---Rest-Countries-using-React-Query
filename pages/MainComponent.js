import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Country from "../components/Country/Country";
import styles from "./MainComponent.module.css";

const MainComponent = () => {
  const { data: queryInfo, isLoading } = useQuery("country", () =>
    axios("https://restcountries.com/v3.1/all").then((res) => res.data)
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(queryInfo?.length);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        All Countries in the World using NextJS and React Query!!!
      </h2>
      <p style={{ textAlign: "center" }}>Length: {queryInfo.length}</p>
      <div className={styles.displayCountry}>
        {queryInfo.map((country) => (
          <Country key={country.car.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
