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
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  background-color: rgba(128, 128, 128, 0.1);

  
  /* Add a semi-transparent overlay */
  &::before {
    content: '';
    background-color: rgba(128, 128, 128, 0.5); /* Adjust the gray background color and opacity as needed */
    background-color:red;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WeddingTitle = styled.h1`
font-family: 'Dancing Script', cursive;
font-size: 40px; // Adjust the font size to make it bigger
font-weight: 100;
  text-align: center;
  margin-bottom: 20px;
  // Add any other styles you want
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
      indicationText: {
        en: 'Tap here to open in the app',
        es: 'Click aca para abrir en la app',
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
      indicationText: {
        en: 'Tap here to open in the app',
        es: 'Click aca para abrir en la app',
      },
      iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192881&lon=34.885046&ct=livemap&pin=1",
      accordionDetails: {
        en: 'Ask for your parking voucher at the reception so you can park without cost ',
        es: 'Pedi tu voucher en la recepción asi podés estacionar sin costo alguno',
      }
    },
    {
      question: {
        en: 'Staying at the hotel? (must know)',
        es: '¿Te hospedas en el hotel?',
      },
      answer: {
        en: '',
        es: '',
      },
      promoCodeDetails: {
        en: 'The promo code to get a discount is ',
        es: 'El promo code para obtener un descuento es ',
      },
    },
    {
      question: {
        en: 'Invitation details',
        es: 'Invitación',
      },
      answer: {
        en: '',
        es: '',
      },
      showInvitation: true,
    },
    {
      question: {
        en: 'Gift Details',
        es: 'Detalle regalo',
      },
      answer: {
        en: '',
        es: '',
      },
    },
  ];

  const targetDate = new Date(2023, 10, 2, 19, 0);

  return (

    <LanguageProvider>
      <GlobalStyles />
      <AppWrapper>
        <LanguageSelector />
        <InfoWrapper>
          <WeddingTitle>Caroline & Matias's Wedding</WeddingTitle>
          {/* <h1>Frequently Asked Questions</h1> */}
          <CountdownTimer targetDate={targetDate} />
          <Accordion faqData={faqData} />
        </InfoWrapper>
      </AppWrapper>
    </LanguageProvider>

  );
};

export default App;