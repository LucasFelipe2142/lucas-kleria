import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Header from "./common/Header";
import photo from "../assets/photo.png";
import Footer from "./common/Footer";
import Countdown from "./Countdown";
import Map from "./common/Map";

export default function Confirm() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const ACTUAL_PAGE = "Confirmar Presença";
  return (
    <Container>
      <Header actualPage={ACTUAL_PAGE} />
      <Img_first src={photo} />
      <Countdown />
      <p className="messageText">
        Queridos convidados, adoraríamos receber uma mensagem carinhosa de vocês
        para nos ajudar a tornar este dia ainda mais especial. Por favor, deixe
        sua mensagem no campo abaixo e saiba que estamos muito felizes por
        compartilhar este momento com vocês. Obrigado pelo amor e carinho.
        <br></br>
        <br></br>
        Kléria e Lucas
      </p>
      <input
        disabled={false}
        type="text"
        name="input"
        placeholder="Nome:"
        value={nomeConvidado}
        onChange={(e) => setNomeConvidado(e.target.value)}
      />
      <textarea
        className="message"
        name="input"
        placeholder="Mensagem:"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button>Enviar Mensagem</Button>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  background-color: white;
  .messageText {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 85%;

    font-family: "Comic Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    text-align: justify;

    color: #000000;
  }
  input {
    width: 85%;
    height: 51px;
    background: #f1f3f7;
    border-radius: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #9f9f9f;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    margin: 20px 0 8px 0;
    outline: none;
  }
  .message {
    width: 85%;
    height: 150px; /* altura fixa */
    resize: none; /* desativa a opção de redimensionamento do usuário */
    background: #f1f3f7;
    border-radius: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #9f9f9f;
    padding: 10px;
    box-sizing: border-box;
    border: none;
    margin: 10px 0 8px 0;
    outline: none;
  }
`;
const Img_first = styled.img`
  margin-top: 54px;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 85%;
  height: 48px;
  background: #000080;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
`;
