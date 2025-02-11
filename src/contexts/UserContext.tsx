import { createContext, useContext, useState } from "react";

interface UserContextProps {
  name: string;
  setName: (name: string) => void;
}

const UserContext = createContext<UserContextProps>({
  name: "Default user name",
  setName: () => {},
});

export const useUser = () => (useContext(UserContext));

export const UserProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [name, setName] = useState<string>("Default User Name");

  const value: UserContextProps = {
    name, setName
  };

  return <>
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  </>;
};
