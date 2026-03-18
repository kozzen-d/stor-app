type MissionMessageProps = {
  name: string;
  planet: string;
};

export default function MissionMessage({ name, planet }: MissionMessageProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      {name ? (
        <p>
          {" "}
          Astronaut {name} is headed to {planet}!
        </p>
      ) : (
        <p>Please enter your name to begin your mission.</p>
      )}
    </div>
  );
}
