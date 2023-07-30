import React, { useContext } from 'react';
import styled from 'styled-components';
import LanguageContext from '../contexts/LanguageContext';
import argentina from './flags/Flag_of_Argentina.svg.png'

const FlagsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const FlagButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
`;

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChangeLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <FlagsWrapper>
      <FlagButton onClick={() => handleChangeLanguage('es')}>
      <img src={argentina} alt="Argentinian Flag" />
      </FlagButton>
      <FlagButton onClick={() => handleChangeLanguage('en')}>
        <img src="/flags/uk.png" alt="English Flag" />
      </FlagButton>
      {/* Agregar más botones de banderas según los idiomas que desees agregar */}
    </FlagsWrapper>
  );
};

export default LanguageSelector;