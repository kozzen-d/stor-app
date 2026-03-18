import { useEffect, useState } from "react";
import { fetchDog } from "./api";

export const RandomDog = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [picture, setPicture] = useState("");

  useEffect(() => {
    async function handleFetchDog() {
      const image = await fetchDog();
      setPicture(image);
    }
    handleFetchDog();
  }, [shouldFetch]);

  return (
    <div>
      
      <img src={picture} alt="dog" />
       <br />
      <button type="button" onClick={() => setShouldFetch((prev) => !prev)}>
        New dog
      </button>
     
    </div>
  );
};