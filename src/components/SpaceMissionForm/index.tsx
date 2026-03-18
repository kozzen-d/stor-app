import PlanetSelect from "./PlanetName";
import AstronautInput from "./AstronautName";
import MissionMessage from "./MissionMessage";
import styles from "./SpaceMissionForm.module.css";
import { useState } from "react";

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>(""); // имя астронавта
  const [planet, setPlanet] = useState<string>("Mars"); // выбранная планета

  return (
    <div className={styles.spaceMissionForm}>
      <h2>Space Mission Registration</h2>
      <form>
        <AstronautInput name={name} setName={setName} />
        <PlanetSelect planet={planet} setPlanet={setPlanet} /> {}
      </form>
      <MissionMessage name={name} planet={planet} />
    </div>
  );
}
