import { createContext, useState, ReactNode } from "react";

const LanguageContext = createContext({
  currentLanguage: "javascript",
  toggleLanguage: () => {},
});

interface LanguageProviderProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const toggleLanguage = () => {
    setCurrentLanguage((prevLanguage) =>
      prevLanguage === "javascript" ? "typescript" : "javascript"
    );
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
