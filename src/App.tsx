import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import useWindowSize from "./hooks/useWindowSize";
import useLocalStorage from "./hooks/useLocalStorage";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  const windowSize = useWindowSize();
  const [permanentName, setPermanentName] = useLocalStorage<string>(
    "eternalName",
    "永遠のしんや"
  );

  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <div>{children}</div>
          <div>
            window size: {windowSize.width} x {windowSize.height}
          </div>

          <div>
            <input
              type="text"
              value={permanentName}
              onChange={(e) => setPermanentName(e.target.value)}
            />
            <p>おかえりなさい、{permanentName}さん</p>
          </div>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
