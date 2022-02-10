import "react-native-gesture-handler";
import React, { createContext, useState } from "react";
import MainScreen from "./src/MainScreen";
import translations from "./src/languages/translations";

export const GlobalLanguage = createContext();

export default function App() {
  // Set Default Language English
  const [lang, setLang] = useState({
    language: "Eng",
    translations: translations.Eng,
  });
  return (
    <GlobalLanguage.Provider value={{ appLang: lang, setLang }}>
      <MainScreen></MainScreen>
    </GlobalLanguage.Provider>
  );
}
