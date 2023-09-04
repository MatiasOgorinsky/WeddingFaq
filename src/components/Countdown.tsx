import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  background-color: #FAF3F0; 
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); 
`;

const CountdownRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const CountdownItem = styled.div`
  text-align: center;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CountdownNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #9A3B3B; /* White text color */
  -webkit-text-stroke: 0.5px black; /* Thin black border for WebKit browsers */
  text-stroke: 0.5px black; /* Thin black border for non-WebKit browsers */
  padding: 5px 10px; /* Add padding to the number */
`;

const CountdownLabel = styled.div`
  font-size: 0.8rem;
  color: #8D8DAA; /* Grey color for labels */
`;

const CountdownText = styled.div`
  font-size: 0.8rem;
  color: #555;
`;

const CountdownDate = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333; /* Adjust the color as needed */
  margin-bottom: 10px;
  
`;

interface CountdownTimerProps {
  targetDate: number | Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = (targetDate as number) - now;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (timeDifference > 0) {
      days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    }

    return { days, hours, minutes, seconds };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <CountdownContainer>
      <CountdownDate>2nd of November 19hs</CountdownDate>
      <CountdownRow>
        {countdown.days !== undefined && (
          <CountdownItem>
            <CountdownNumber>{countdown.days}</CountdownNumber>
            <CountdownLabel>Days</CountdownLabel>
          </CountdownItem>
        )}
        {countdown.hours !== undefined && (
          <CountdownItem>
            <CountdownNumber>{countdown.hours}</CountdownNumber>
            <CountdownLabel>Hours</CountdownLabel>
          </CountdownItem>
        )}
        {countdown.minutes !== undefined && (
          <CountdownItem>
            <CountdownNumber>{countdown.minutes}</CountdownNumber>
            <CountdownLabel>Minutes</CountdownLabel>
          </CountdownItem>
        )}
        {countdown.seconds !== undefined && (
          <CountdownItem>
            <CountdownNumber>{countdown.seconds}</CountdownNumber>
            <CountdownLabel>Seconds</CountdownLabel>
          </CountdownItem>
        )}

      </CountdownRow>

      <CountdownRow>
        <CountdownText>to our wedding</CountdownText>
      </CountdownRow>
    </CountdownContainer>
  );
};

export default CountdownTimer;
