import useWindowSize from "../hooks/useWindowSize";

function WindowSize() {
  const windowSize = useWindowSize();

  return (
    <div>
      window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}

export default WindowSize;
