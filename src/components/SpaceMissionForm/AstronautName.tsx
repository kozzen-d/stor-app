import React from "react";

type AstronautInputProps = {
  name: string;
  setName: (name: string) => void;
};

export default function AstronautInput({ name, setName }: AstronautInputProps) {
  return (
    <div>
      <label>Astronaut Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
