import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import RedirectPage from "./pages/RedirectPage";
import NotFound from "./pages/NotFound";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
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
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <UserProvider>
          <ThemeProvider>
            <div>{children}</div>
          </ThemeProvider>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
