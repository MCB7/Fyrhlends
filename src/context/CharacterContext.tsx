import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


interface CharacterContextData {
    name: string;
    
    setName: (name: string) => void;
  }
  
  const CharacterContext = createContext<CharacterContextData>({
    name: "",
    setName: () => {},
  });
  
  export const useCharacterContext = () => useContext(CharacterContext);

  interface Props {
    children: React.ReactNode;
  }
  
  
  export const CharacterProvider: React.FC<Props> = ({ children }) => {
    const [name, setName] = useState("");
    const [storedValue, setValue] = useLocalStorage<string>("characterName", name);
  
    useEffect(() => {
      const storedName = localStorage.getItem("characterName");
      if (storedName) {
        setName(storedName);
      }
    }, []);
  
    return (
      <CharacterContext.Provider value={{ name, setName }}>
        {children}
      </CharacterContext.Provider>
    );
  };