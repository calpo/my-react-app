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
import Greeting from "./components/Greeting";
import MyForm from "./components/MyForm";
import ZustandSample from "./components/ZustandSample";
import WindowSize from "./components/WindowSize";
import PermanentUserName from "./components/PermanentUserName";
import Greeting2 from "./components/Greeting2";

interface Props {
  children: React.ReactNode;
}

function App({ children }: Props) {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/user/1">User 1</Link></li>
              </ul>
              <ul>
                <li><Link to="/greeting">Greeting</Link></li>
                <li><Link to="/greeting2">Greeting2</Link></li>
                <li><Link to="/my-form">My Form</Link></li>
                <li><Link to="/zustand">Zustand Sample</Link></li>
                <li><Link to="/window-size">Window Size</Link></li>
                <li><Link to="/permanent-username">Permanent Username</Link></li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:id/*" element={<User />} />
              <Route path="/greeting" element={<Greeting />} />
              <Route path="/greeting2" element={<Greeting2 name="お名前初期値" age={20} isAdult={true} status="success" />} />
              <Route path="/my-form" element={<MyForm placeholder='Enter your name' />} />
              <Route path="/zustand" element={<ZustandSample />} />
              <Route path="/window-size" element={<WindowSize />} />
              <Route path="/permanent-username" element={<PermanentUserName />} />
              <Route path="/redirect" element={<RedirectPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <div>{children}</div>
          </div>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
