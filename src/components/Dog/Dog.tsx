
import { useState, useEffect, type JSX } from "react";

import styles from "./Dog.module.css";

export default function RandomDog(): JSX.Element {
  const [dogImage, setDogImage] = useState<string>("");

  const fetchDog = async (): Promise<void> => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Error fetching dog:", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Random Dog</h2>

      {dogImage && (
        <img
          className={styles.image}
          src={dogImage}
          alt="Random Dog"
        />
      )}

      <br />

      <button
        className={styles.button}
        onClick={fetchDog}
      >
        New Dog
      </button>
    </div>
  );
}