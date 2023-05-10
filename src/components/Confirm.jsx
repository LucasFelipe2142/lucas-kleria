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
import { useMenu } from "../contexts/MeuContext";
import Date from "./common/Date";

export default function Confirm() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [nomeConvidado, setNomeConvidado] = useState("");
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const navigate = useNavigate();

  const ACTUAL_PAGE = "Confirmar Presença";

  useEffect(() => {
    setIsButtonEnabled(!!nomeConvidado && /^[a-zA-Z ]*$/.test(nomeConvidado));
  }, [nomeConvidado]);

  const handleConfirmation = () => {
    if (isButtonEnabled) {
      axios
        .post("https://api.casamento-lucas-kleria.com.br/api/guests", {
          name: nomeConvidado,
        })
        .then((response) => {
          setConfirmationSuccess(true);
        })
        .catch((error) => {
          alert(
            "Erro ao enviar confirmação. Por favor, tente novamente mais tarde."
          );
        });
    }
  };

  const handleNewConfirmation = () => {
    setConfirmationSuccess(false);
    setNomeConvidado("");
  };

  const handleStayOnPage = () => {
    setConfirmationSuccess(false);
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Header actualPage={ACTUAL_PAGE} setIsMenuOpen={setIsMenuOpen} />
      <Img_first src={photo} />
      <Countdown />
      <Date />

      <p className="confirmText">
        Por favor, preencha o campo abaixo com o seu nome completo para
        confirmar a sua presença no nosso casamento. Agradecemos desde já a sua
        confirmação e a sua presença em nosso grande dia!
      </p>
      <input
        type="text"
        name="input"
        placeholder="Nome do Convidado"
        value={nomeConvidado}
        onChange={(e) =>
          setNomeConvidado(e.target.value.replace(/[^a-zA-Z ]/g, ""))
        }
      />
      <Button
        isButtonEnabled={nomeConvidado !== ""}
        onClick={handleConfirmation}
      >
        CONFIRMAR PRESENÇA
      </Button>
      <h1 style={{ margin: "40px 0 20px 0", fontSize: "15px" }}>
        <strong>MAPA PARA A CELEBRAÇÃO</strong>
      </h1>
      <Map />
      <Footer />

      {confirmationSuccess && (
        <Modal>
          <ModalContent>
            <h2>Confirmação enviada com sucesso!</h2>
            <ButtonGroup>
              <ButtonModal onClick={handleNewConfirmation}>
                Nova confirmação
              </ButtonModal>
              <ButtonModal onClick={handleStayOnPage}>
                Permanecer na página
              </ButtonModal>
              <ButtonModal onClick={handleGoToHome}>
                Voltar para a home
              </ButtonModal>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: white;
  .confirmText {
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
  .containerDate {
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .containerInfo {
    width: 85%;
    margin: 30px 0 20px 0;
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
  background: ${({ isButtonEnabled }) =>
    isButtonEnabled ? "#000080" : "#9f9f9f"};
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  cursor: ${({ isButtonEnabled }) => (isButtonEnabled ? "pointer" : "default")};
`;

const Modal = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const ButtonModal = styled.div`
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
