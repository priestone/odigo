import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");

  return (
    <TextContext.Provider value={{ inputText, setInputText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useText = () => useContext(TextContext);
