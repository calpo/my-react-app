import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Greeting: React.FC = () => {
  const [message, setMessage] = useState<string>("Hello");
  const { theme, toggleTheme } = useTheme();
  const { name } = useUser();

  useEffect(() => {
    console.log(`hi ${name}, component mounted.`);

    return () => {
      console.log(`hi ${name}, component unmounted.`);
    };
  }, []);

  useEffect(() => {
    console.log(`message changed. ${message}`);
  }, [message]);

  const handleClick = () => {
    setMessage(`ようこそ ${name} !`);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        <h1>{message}</h1>
        <div>UserContextに保存されているnameの値: {name} </div>
        <button onClick={handleClick}>挨拶する</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
};

export default Greeting;
