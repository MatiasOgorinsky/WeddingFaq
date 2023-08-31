import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';

const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Align text within the container */
  margin-bottom: 20px;
`;

const CountdownRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem; /* Add margin to separate rows */
`;

const CountdownItem = styled.div`
  text-align: center;
  margin: 0 1rem;

  .countdown-number {
    font-size: 2rem;
    font-weight: bold;
    color: #ff6b6b; /* Choose your color */
  }

  .countdown-label {
    font-size: 0.8rem;
    color: #555;
  }
`;

const CountdownText = styled.div`
  font-size: 1.2rem;
  color: #333;
`;

interface CountdownTimerProps {
  targetDate: number | Date; // Specify the type here (timestamp or Date)
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
      <CountdownRow>
        {countdown.days !== undefined && (
          <CountdownItem>
            <div className="countdown-number">{countdown.days}</div>
            <div className="countdown-label">Days</div>
          </CountdownItem>
        )}
        {countdown.hours !== undefined && (
          <CountdownItem>
            <div className="countdown-number">{countdown.hours}</div>
            <div className="countdown-label">Hours</div>
          </CountdownItem>
        )}
        {countdown.minutes !== undefined && (
          <CountdownItem>
            <div className="countdown-number">{countdown.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </CountdownItem>
        )}
        {countdown.seconds !== undefined && (
          <CountdownItem>
            <div className="countdown-number">{countdown.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </CountdownItem>
        )}
             <CountdownItem>
          <FaRegClock size={36} />
        </CountdownItem>
      </CountdownRow>
      
      <CountdownRow>
        <CountdownText>to our wedding</CountdownText>
   
      </CountdownRow>
    </CountdownContainer>
  );
};

export default CountdownTimer;
