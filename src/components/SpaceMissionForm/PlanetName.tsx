import React from "react";

type PlanetSelectProps = {
  planet: string;
  setPlanet: (planet: string) => void;
};

export default function PlanetSelect({ planet, setPlanet }: PlanetSelectProps) {
  return (
    <div>
      <label>Destination Planet: </label>
      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        <option value="Mars">Mars</option>
        <option value="Venus">Venus</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
      </select>
    </div>
  );
}
