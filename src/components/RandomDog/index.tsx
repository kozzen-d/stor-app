import { useEffect, useState } from "react";
import { fetchDog } from "./api";
import styles from "../Dog/Dog.module.css";

export const RandomDog = () => {
  const [picture, setPicture] = useState("");
  async function handleFetchDog() {
    const image = await fetchDog();
    setPicture(image);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleFetchDog();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Random Dog</h2>
      <img className={styles.image} src={picture} alt="dog" />
      <br />
      <button className={styles.button} type="button" onClick={handleFetchDog}>
        New dog
      </button>
    </div>
  );
};
