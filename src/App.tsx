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
  font-family: 'Roboto', sans-serif;
  font-size: 38px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
  color: #9A3B3B;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a subtle text shadow to make the font's borders darker */
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
        en: 'How to get to the venue?',
        es: '¿Cómo llegar al salón?',
      },
      answer: {
        en: 'Hotel: Prima Millenium, Venue: Me-Events',
        es: 'Hotel: Prima Millenium, Salon: Me-Events',
      },
      address: {
        en: ` The address is: Ha-Tidhar St 2, Ra'anana`,
        es: `La dirección es: Ha-Tidhar St 2, Ra'anana`,
      },
      indicationText: {
        en: 'Tap here to open in the app',
        es: 'Click aca para abrir en la app',
      },
      info1: {
        en: `There is a specific elevator that goes straight to the venue, so you don't need to go through the hotel`,
        es: 'Hay un ascensor especifico para el salon sin necesidad de tener que pasar por el hotel',
      },
      info2: {
        en: 'Follow the arrow',
        es: 'Seguí la flecha',
      },
      info3: {
        en: 'And then you press H1 to get to the venue',
        es: 'Y luego apretas el boton h1 que va directo al salón',
      },

      iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192409&lon=34.884317&ct=livemap&pin=1"
    },
    
    {
      question: {
        en: 'Where can I park?',
        es: '¿Donde puedo estacionar?',
      },
      answer: {
        en: 'An attendand will provide you with a voucher for the parking at this point ,so you can park your car without any cost',
        es: 'Se te proveera a la entrada con un voucher para el estacionamiento, Así podes estacionar sin costo alguno.',
      },
      indicationText: {
        en: 'Tap here to open in the app',
        es: 'Click aca para abrir en la app',
      },
      info4: {
        en: 'The entrance is on HaSheizaf street',
        es: 'La entrada es por la calle Hasheizaf',
      },
      info5: {
        en: 'Here specifically',
        es: 'Puntualmente aca',
      },
      info6: {
        en: 'The parking is from the 1st floor until the 3rd, and each floor has a direct elevator to the venue',
        es: 'El estacionamiento es desde el primer hasta el tercer piso y cada piso tiene un ascensor que va directo al salón',
      },
      info7: {
        en: 'And then press on H1 floor to come direct to the venue',
        es: 'Y después apreta H1 para venir directo al salón',
      },
      
      iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192925&lon=34.884261&ct=livemap&pin=1",
      isParkingImages: true,
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
        es: 'El codigo de promoción para obtener un descuento es ',
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
        en: 'RSVP',
        es: 'RSVP',
      },
      answer: {
        en: 'If you have an Israeli phone number you will recieve an sms on the 12th of October to confirm RSVP',
        es: 'Si tenes un numero de telefono Israeli, vas a recibir un mensaje de texto el 12 de Octubre para confirmar tu presencia',
      },
    },
    {
      question: {
        en: 'Gift Details',
        es: 'Detalle regalo',
      },
      answer: {
        en: `Dear friends and loved ones, as we embark on this beautiful journey together, your support and generosity would mean so much to us. If you'd like to contribute to our special day, your wedding gift would be greatly appreciated.`,
        es: 'Queridos amigos y seres queridos, mientras emprendemos este hermoso viaje juntos, su apoyo y generosidad significarían muchísimo para nosotros. Si desean contribuir a nuestro día especial, su regalo de boda sería muy apreciado."',
      },
      extraInfoBank: {
        en: `At the wedding venue, you will find designated areas to deposit your envelopes. Alternatively, if you prefer to send your gift digitally, please find additional details below.`,
        es: 'En el salón habra un lugar para depositar sobres. De todas maneras si preferis por transferencia dejamos los detalles abajo de nuestra cuenta.',
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