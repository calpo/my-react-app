import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import useWindowSize from "./hooks/useWindowSize";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";

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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id/*" element={<User />} />
        </Routes>

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
      </div>
    </Router>
  );
}

export default App;
