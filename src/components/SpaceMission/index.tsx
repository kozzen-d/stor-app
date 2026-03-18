import { useId, useState } from "react";
import styles from "./SpaceMission.module.css";
import { Link } from "react-router-dom";

export default function SpaceMission() {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("Mars");
  const nameInputId = useId();

  return (
    <div className={styles.spaceMission}>
      <h2>Space mission</h2>
      <label htmlFor={nameInputId}>Astronaut Name: </label>
      <input
        id={nameInputId}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Destination Planet: </label>
      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>

      <p>
        Astronaut {name} is heading to {planet}
      </p>

      <br />
      <Link to="/">Go to homepage</Link>
    </div>
  );
}
