// App.tsx
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Accordion from './components/Accordion';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';
import { FaqData } from './components/Accordion';
import styled from 'styled-components';
import CountdownTimer from './components/Countdown';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InfoWrapper = styled.div`
  margin-top: 20px;
  max-width: 600px;
  width: 100%;
  text-align: center; 

  @media (max-width: 768px) {
    max-width: 100%; 
    margin-top: 20px;

  }
`;
const App: React.FC = () => {
  const faqData: FaqData[] = [
    {
      question: {
        en: 'How to get?',
        es: '¿Cómo llegar?',
      },
      answer: {
        en: '',
        es: '',
      },
      address: {
        en: `Address: Ha-Tidhar St 2, Ra'anana`,
        es: `Dirección: Ha-Tidhar St 2, Ra'anana`,
      },
      indicationText:{
        en:'Tap here to open in the app',
        es:'Click aca para abrir en la app',
      },
      iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192881&lon=34.885046&ct=livemap&pin=1"
    },
    {
      question: {
        en: 'Where can I park?',
        es: '¿Donde puedo estacionar?',
      },
      answer: {
        en: '',
        es: '',
      },
      indicationText:{
        en:'Tap here to open in the app',
        es:'Click aca para abrir en la app',
      },
      iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192881&lon=34.885046&ct=livemap&pin=1",
      accordionDetails:{
        en:'The parking has a cost of ₪25 for the whole evening, ask for the voucher at the entrance',
        es:'The parking has a cost of ₪25 for the whole evening, ask for the voucher at the entrance',
      }
    },
    {
      question: {
        en: 'Staying at the hotel? (must know)',
        es: '¿Cuál es la versión más reciente de React?',
      },
      answer: {
        en: '',
        es: '',
      },
      accordionDetails:{
        en:'The promo code is GRUNCAROLINE',
        es:'El promo code para obtener un descuento es GRUNCAROLINE',
      },
    },
    {
      question: {
        en: 'Invitation details',
        es: '¿Cuál es la versión más reciente de React?',
      },
      answer: {
        en: '',
        es: '',
      },
      showInvitation:true,
    },
    {
      question: {
        en: 'Gift Details',
        es: '¿Cuál es la versión más reciente de React?',
      },
      answer: {
        en: '',
        es: '',
      },
      accordionDetails:{
        en:'The promo code is GRUNCAROLINE',
        es:'El promo code para obtener un descuento es GRUNCAROLINE',
      },
    },
  ];

  const targetDate = new Date(2023, 10, 2, 19,0);

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