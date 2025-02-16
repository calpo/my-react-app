import useLocalStorage from "../hooks/useLocalStorage";

function PermanentUserName() {
  const [permanentName, setPermanentName] = useLocalStorage<string>(
    "eternalName",
    "永遠のしんや"
  );

  return (
    <div>
      <input
        type="text"
        value={permanentName}
        onChange={(e) => setPermanentName(e.target.value)}
      />
      <p>おかえりなさい、{permanentName}さん</p>
    </div>
  );
}

export default PermanentUserName;
