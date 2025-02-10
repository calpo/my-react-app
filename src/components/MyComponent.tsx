import React, { useState } from "react";

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const items: Array<string> = ["いちご", "バナナ", "みかん"];

  function handleClick(): void {
    setIsLoggedIn(true);
  }

  return (
    <>
      {isLoggedIn ? (
        <div>Hi {name}. You are logged in.</div>
      ) : (
        <div>You are anonymouse.</div>
      )}
      <button onClick={handleClick}>Login</button>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MyComponent;
