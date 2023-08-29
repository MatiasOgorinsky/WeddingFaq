// App.tsx
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Accordion from './components/Accordion';
import LanguageSelector from './components/LanguageSelector';
import  { LanguageProvider } from './contexts/LanguageContext';
import { FaqData } from './components/Accordion';
import styled from 'styled-components';
import CountdownTimer from './components/Countdown';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoWrapper = styled.div`
 margin-top: 20px;
`;

const App: React.FC = () => {
  const faqData: FaqData[] = [
    {
      question: {
        en: 'How to get?',
        es: '¿Cómo llegar?',
      },
      answer: {
        en: 'Here the link to waze to the venue',
        es: 'React es una biblioteca JavaScript para construir interfaces de usuario interactivas.',
      },
    },
    {
      question: {
        en: 'Where can I park?',
        es: '¿Cuál es la versión más reciente de React?',
      },
      answer: {
        en: 'The latest version of React is 17.x at the time of creating this project.',
        es: 'La versión más reciente de React es la 17.x en el momento de la creación de este proyecto.',
      },
    },
    {
      question: {
        en: 'Staying at the hotel? (must know)',
        es: '¿Cuál es la versión más reciente de React?',
      },
      answer: {
        en: 'The latest version of React is 17.x at the time of creating this project.',
        es: 'La versión más reciente de React es la 17.x en el momento de la creación de este proyecto.',
      },
    },
  ];
  
  const targetDate = new Date(2023, 10, 2);

  return (
    <LanguageProvider>
      <GlobalStyles />
      <AppWrapper>
        <LanguageSelector />
        <InfoWrapper>
          <h1>Frequently Asked Questions</h1>
          <CountdownTimer targetDate={targetDate} />
          <Accordion faqData={faqData} />
        </InfoWrapper>
      </AppWrapper>
    </LanguageProvider>
  );
};

export default App;