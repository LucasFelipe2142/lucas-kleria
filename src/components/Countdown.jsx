import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 11px;
  }
`;

const CountdownWrapper = styled.div`
  font-family: "Comic Neue";
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 12px;
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const CountdownNumber = styled.div`
  margin-bottom: 5px;
  font-family: "Comic Neue";
  font-size: 1.5rem;
  color: #1a237e; /* cor azul marinho */
`;

const CountdownLabel = styled.div`
  font-family: "Comic Neue";
  font-size: 0.7rem;
  text-transform: uppercase;
  color: black; /* cor azul marinho */
`;

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(moment("2023-09-30"));
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const difference = moment.duration(countdownDate.diff(now));
      const days = Math.floor(difference.asDays());
      const hours = difference.hours();
      const minutes = difference.minutes();
      const seconds = difference.seconds();
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <Container>
      <h1>CONTAGEM REGRESSIVA PARA O GRANDE DIA</h1>
      <CountdownWrapper>
        <CountdownItem>
          <CountdownNumber>{timeLeft.days}</CountdownNumber>
          <CountdownLabel>Dias</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{timeLeft.hours}</CountdownNumber>
          <CountdownLabel>Horas</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{timeLeft.minutes}</CountdownNumber>
          <CountdownLabel>Minutos</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{timeLeft.seconds}</CountdownNumber>
          <CountdownLabel>Segundos</CountdownLabel>
        </CountdownItem>
      </CountdownWrapper>
    </Container>
  );
};

export default Countdown;
