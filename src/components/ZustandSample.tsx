import { useBearStore } from "../stores/bearStore";

const ZustandSample = () => {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <>
      <div>
        {bears} bears
        <button onClick={() => increase(1)}> increase </button>
      </div>
    </>
  );
};

export default ZustandSample;
