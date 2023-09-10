// App.tsx
import React, { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Accordion from './components/Accordion';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './contexts/LanguageContext';
import { FaqData } from './components/Accordion';
import styled, { css } from 'styled-components';
import CountdownTimer from './components/Countdown';
import wedding from './images/wedding.jpeg'

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

const ImageWrapper = styled.div<{ showImage?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ showImage }) => (showImage ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  box-sizing: border-box; /* Add this line */

  @media (max-width: 768px) {
    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-width: 120%;

    }

    ${({ showImage }) =>
      !showImage &&
      css`
        opacity: 0;
        pointer-events: none;
      `}
  }

  @media (min-width: 769px) {
    & img {
      width: 90%;
      height: 100%;
      object-fit: cover;
      
    }
  }
`;

  const App: React.FC = () => {
    const faqData: FaqData[] = [
      {
        question: {
          en: 'How to get to the venue?',
          es: '¿Cómo llegar al salón?',
          he: 'איך להגיע למקום האירוע?',
        },
        answer: {
          en: 'Hotel: Prima Millenium, Venue: Me-Events',
          es: 'Hotel: Prima Millenium, Salón: Me-Events',
          he: 'מלון: פרימה מילניום, מקום האירוע: Me-Events',
        },
        address: {
          en: `The address is: Ha-Tidhar St 2, Ra'anana`,
          es: `La dirección es: Ha-Tidhar St 2, Ra'anana`,
          he: 'הכתובת היא: רחוב התדהר 2, רעננה',
        },
        indicationText: {
          en: 'Tap here to open in the app',
          es: 'Click aca para abrir en la app',
          he: 'לחץ כאן כדי לפתוח באפליקציה',
        },
        info1: {
          en: `There is a specific elevator that goes straight to the venue, so you don't need to go through the hotel`,
          es: 'Hay un ascensor específico para el salón sin necesidad de tener que pasar por el hotel',
          he: 'ישנה מעלית מיוחדת המובילה ישירות למקום האירוע, כך שאין צורך לעבור דרך המלון',
        },
        info2: {
          en: 'Follow the arrow',
          es: 'Seguí la flecha',
          he: 'עקוב אחרי החץ',
        },
        info3: {
          en: 'And then you press H1 to get to the venue',
          es: 'Y luego apretas el botón H1 que va directo al salón',
          he: 'ואז לחץ על H1 כדי להגיע ישירות למקום האירוע',
        },
        iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192409&lon=34.884317&ct=livemap&pin=1"
      },
      
      {
        question: {
          en: 'Where can I park?',
          es: '¿Dónde puedo estacionar?',
          he: 'איפה אני יכול לחנות?',
        },
        answer: {
          en: 'An attendand will provide you with a voucher for the parking at this point, so you can park your car without any cost',
          es: 'Se te proveerá a la entrada con un voucher para el estacionamiento, Así puedes estacionar sin costo alguno.',
          he: ' נציג מטעמנו יספק לך שובר לחנייה בנקודה זו, כך שתוכל לחנות את הרכב שלך בחינם',
        },

        indicationText: {
          en: 'Tap here to open in the app',
          es: 'Click aca para abrir en la app',
          he: 'לחץ כאן כדי לפתוח באפליקציה',
        },
        info4: {
          en: 'The entrance is on HaSheizaf street',
          es: 'La entrada es por la calle Hasheizaf',
          he: 'הכניסה היא ברחוב השיזף',
        },
        info5: {
          en: 'Here specifically',
          es: 'Puntualmente aca',
          he: 'בדיוק כאן',
        },
        info6: {
          en: 'The parking is from the 1st floor until the 3rd, and each floor has a direct elevator to the venue',
          es: 'El estacionamiento es desde el primer hasta el tercer piso y cada piso tiene un ascensor que va directo al salón',
          he: 'החנייה היא מהקומה הראשונה עד הקומה השלישית, ולכל קומה יש מעלית ישירה למקום האירוע',
        },
        info7: {
          en: 'And then press on H1 floor to come direct to the venue',
          es: 'Y después apreta H1 para venir directo al salón',
          he: 'ואז לחץ על קומה H1 כדי להגיע ישירות למקום האירוע',
        },
        iframeUrlParking: "https://embed.waze.com/iframe?zoom=16&lat=32.192925&lon=34.884261&ct=livemap&pin=1",
        isParkingImages: true,
      },
      // {
      //   question: {
      //     en: 'Staying at the hotel? (must know)',
      //     es: '¿Te hospedas en el hotel?',
      //     he: 'האם אתה מתארח במלון? (חשוב לדעת)',
      //   },
      //   answer: {
      //     en: '',
      //     es: '',
      //     he: '',
      //   },
      //   promoCodeDetails: {
      //     en: 'The promo code to get a discount is ',
      //     es: 'El código de promoción para obtener un descuento es ',
      //     he: 'קוד הפרומו כדי לקבל הנחה הוא ',
      //   },
      //   info7: {
      //     en: 'Valid from the 1st of November until the 5th of November',
      //     es: 'Válido desde el 1 al 5 de Noviembre',
      //     he: 'תקף מה-1 בנובמבר עד ה-5 בנובמבר',
      //   },
      // },
      {
        question: {
          en: 'Invitation details',
          es: 'Invitación',
          he: 'פרטי הזמנה',
        },
        answer: {
          en: '',
          es: '',
          he: '',
        },
        showInvitation: true,
      },
      {
        question: {
          en: 'RSVP Confirm attendance',
          es: 'RSVP Confimar asistencia',
          he: 'אשר נוכחות',
        },
        answer: {
          en: 'If you have an Israeli phone number you will receive an sms on the 12th of October to confirm RSVP. If you are abroad, we will contact you',
          es: 'Si tienes un número de teléfono israelí, recibirás un mensaje de texto el 12 de Octubre para confirmar tu presencia. Si estás en el extranjero, nosotros te contactaremos',
          he: 'אם יש לך מספר טלפון ישראלי, תקבל הודעת טקסט ב-12 באוקטובר לאישור הנוכחות. אם אתה בחו"ל, אנחנו ניצור קשר עמך',
        },
      },
      {
        question: {
          en: 'Gift Details',
          es: 'Detalle regalo',
          he: 'פרטי מתנה',
        },
        answer: {
          en: `Dear friends and loved ones, as we embark on this beautiful journey together, your support and generosity would mean so much to us. If you'd like to contribute to our special day, your wedding gift would be greatly appreciated.`,
          es: 'Queridos amigos y seres queridos, mientras emprendemos este hermoso viaje juntos, su apoyo y generosidad significarían muchísimo para nosotros. Si desean contribuir a nuestro día especial, su regalo de boda sería muy apreciado.',
          he: 'אורחים יקרים,  בעוד אנו יוצאים למסע משותף,  תמיכתכם ונדיבותכם חשובה לנו מאוד. אם ברצונכם להשתתף במתנת חתונה עבורנו,  ביום המיוחד שלנו, נעריך את זה מאוד!',
        },
        extraInfoBank: {
          en: `At the wedding venue, you will find designated areas to deposit your envelopes. Alternatively, if you prefer to send your gift digitally, please find additional details below.`,
          es: 'En el salón habrá un lugar para depositar sobres. De todas maneras si prefieren por transferencia dejamos los detalles abajo de nuestra cuenta.',
          he: 'במקום האירוע,  תמצאו איזור עם מעטפות. לחילופין, אם תעדיפו לתת מתנה דיגיטלית, הפרטים להעברה בנקאית רשומים מטה:',

        },
      },
    ];
  
  

  const targetDate = new Date(2023, 10, 2, 19, 0);

  const [showImage, setShowImage] = useState(true);
  const [imageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(false);

      setTimeout(() => {
        setImageVisible(false);
      }, 3000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {imageVisible && (
        <ImageWrapper showImage={showImage}>
          <img src={wedding} alt="Wedding" />
        </ImageWrapper>
      )}
      {!imageVisible && (
        <LanguageProvider>
          <GlobalStyles />
          <AppWrapper>
            <LanguageSelector />
            <InfoWrapper>
              <WeddingTitle>Caroline & Matias's Wedding</WeddingTitle>
              <CountdownTimer targetDate={targetDate} />
              <Accordion faqData={faqData} />
            </InfoWrapper>
          </AppWrapper>
        </LanguageProvider>
      )}
    </div>
  );
};

export default App;
