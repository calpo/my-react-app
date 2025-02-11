import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <div>{children}</div>
        </ThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
