import { useEffect, useState } from "react";
import exampleStyles from "./Exampel.module.css";
import buttonStyles from "../ui/Button/Button.module.css";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect version 1");
  });

  useEffect(() => {
    console.log("Use Effect version 2");
  }, []);

  useEffect(() => {
    console.log("Use Effect version 3", count);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Bip");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={exampleStyles.example}>
      <h2>Example for useEffect</h2>
      <button
        className={buttonStyles.button}
        type="button"
        onClick={() => setCount(prev => prev + 1)}
      >
        +
      </button>
      <p>Count: {count}</p>
    </div>
  );
}