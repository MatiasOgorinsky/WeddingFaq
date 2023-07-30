// App.tsx
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Accordion from './components/Accordion';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';
import { FaqData } from './components/Accordion';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    // Add more questions and answers in different languages as desired
  ];

  return (
    <LanguageProvider>
      <GlobalStyles />
      <AppWrapper>
        <LanguageSelector />
        <h1>Frequently Asked Questions</h1>
        <Accordion faqData={faqData} />
      </AppWrapper>
    </LanguageProvider>
  );
};

export default App;