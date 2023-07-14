import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import Header from "./common/Header";
import photo from "../assets/cemD.png";
import Footer from "./common/Footer";
import Countdown from "./Countdown";
import { useMenu } from "../contexts/MeuContext";
import { homeText } from "./common/Texts";

export default function Home() {
  const navigate = useNavigate();
  const ACTUAL_PAGE = "Kléria & Lucas";
  const { isMenuOpen, toggleMenu } = useMenu();

  function handleMenuClick() {
    toggleMenu();
  }

  return (
    <Container>
      <Header actualPage={ACTUAL_PAGE} onMenuClick={handleMenuClick} />
      {isMenuOpen && <MenuOverlay onClick={handleMenuClick} />}
      <ImgFirst src={photo} />
      <Countdown />
      <p className="acknowledgment">{homeText}</p>
      <Button onClick={() => navigate("/confirmar-presenca")}>
        CONFIRMAR PRESENÇA
      </Button>
      <Button onClick={() => navigate("/mensagens")}>
        MENSAGEM PARA OS NOIVOS
      </Button>
      <Button
        onClick={() =>
          window.open("https://sites.icasei.com.br/lucasekleria", "_blank")
        }
      >
        LISTA DE PRESENTES
      </Button>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-bottom: 30px;
  .acknowledgment {
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
`;

const ImgFirst = styled.img`
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
