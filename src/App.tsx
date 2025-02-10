import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
}

export default App;
