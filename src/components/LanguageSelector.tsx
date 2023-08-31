import React, { useContext } from "react";
import styled from "styled-components";
import LanguageContext from "../contexts/LanguageContext";
import argentina from "./flags/Flag_of_Argentina.svg.png";
import usaflag from "./flags/usaflag.png";

const FlagsWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const FlagButton = styled.button<{ isSelected?: string }>`
  display: flex;
  justify-content: center;  
  align-items: center;      
  background-color: transparent;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected === "en" || isSelected === "es" ? "1px solid" : "none")};
  width: 30px;
  height: 30px;
  border-radius: 50%;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;



const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return (
    <FlagsWrapper>
      <FlagButton
        onClick={() => handleChangeLanguage("en")}
        isSelected={language === "en" ? "en" : undefined}
      >
        <img src={usaflag} alt="English" />
      </FlagButton>
      <FlagButton
        onClick={() => handleChangeLanguage("es")}
        isSelected={language === "es" ? "es" : undefined}
      >
        <img src={argentina} alt="Spanish" />
      </FlagButton>

      {/* Add more flag buttons for other languages if needed */}
    </FlagsWrapper>
  );
};

export default LanguageSelector;
