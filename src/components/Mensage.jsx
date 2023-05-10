import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Header from "./common/Header";
import photo from "../assets/photo.png";
import Footer from "./common/Footer";
import Countdown from "./Countdown";
import { useMenu } from "../contexts/MeuContext";
import emailjs from "emailjs-com";
import dayjs from "dayjs";
import { ThreeDots } from "react-loader-spinner";

export default function Confirm() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [nomeConvidado, setNomeConvidado] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [botao, setBotao] = useState("");
  const [loader, setLoader] = useState("apagar");
  const [ativado, setAtivado] = useState(true);
  const [desabilitarinput, setDesabilitarinput] = useState(false);
  const navigate = useNavigate();
  const ACTUAL_PAGE = "Mensagem Para os noivos";

  function handleMenuClick() {
    toggleMenu();
  }

  useEffect(() => {
    setIsButtonEnabled(!!nomeConvidado && !!message);
  }, [nomeConvidado, message]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSend = () => {
    if (isButtonEnabled) {
      if (ativado) {
        setDesabilitarinput(true);
        setAtivado(!true);
        setBotao("apagar");
        setLoader("");
        axios
          .post("https://api.casamento-lucas-kleria.com.br/api/messages", {
            name: nomeConvidado,
            message: message,
          })
          .then((response) => {
            setConfirmationSuccess(true);

            const dataAtual = dayjs();
            const dataHoraFormatada = dataAtual.format("DD/MM/YYYY HH:mm:ss");
            // Configurar o email a ser enviado
            const emailParams = {
              to_email: "casamento.lucas.kleria@gmail.com",
              name: nomeConvidado,
              message: message,
              date: dataHoraFormatada,
            };
            // Enviar o email
            emailjs.send(
              "mail_id",
              "mensagem_noivos",
              emailParams,
              "yf1L-YblCbRjy5ojh"
            );
          })
          .catch((error) => {
            alert(
              "Erro ao enviar mensagem. Por favor, tente novamente mais tarde."
            );
            setDesabilitarinput(false);
            setAtivado(true);
            setBotao("");
            setLoader("apagar");
          });
      }
    }
  };

  const handleNewConfirmation = () => {
    setConfirmationSuccess(false);
    setMessage("");
    setIsButtonEnabled(false);
    setDesabilitarinput(false);
    setAtivado(true);
    setBotao("");
    setLoader("apagar");
  };

  const handleStayOnPage = () => {
    setConfirmationSuccess(false);
    setIsButtonEnabled(false);
    setDesabilitarinput(false);
    setAtivado(true);
    setBotao("");
    setLoader("apagar");
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header actualPage={ACTUAL_PAGE} onMenuClick={handleMenuClick} />
      {isMenuOpen && <MenuOverlay onClick={handleMenuClick} />}
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
        type="text"
        name="input"
        placeholder="Nome:"
        value={nomeConvidado}
        disabled={desabilitarinput}
        onChange={(e) =>
          setNomeConvidado(e.target.value.replace(/[^a-zA-Z ]/g, ""))
        }
      />
      <textarea
        className="message"
        name="input"
        placeholder="Mensagem:"
        value={message}
        disabled={desabilitarinput}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button isButtonEnabled={isButtonEnabled} onClick={handleSend}>
        <div className={botao}>ENVIAR MENSAGEM</div>
        <div className={loader}>
          <ThreeDots color="#FFFFFF" height={60} width={60} />
        </div>
      </Button>
      {confirmationSuccess && (
        <Modal>
          <ModalContent>
            <h2>Mensagem enviada com sucesso!</h2>
            <ButtonGroup>
              <ButtonModal onClick={handleNewConfirmation}>
                Nova mensagem
              </ButtonModal>
              <ButtonModal onClick={handleStayOnPage}>
                Permanecer na página
              </ButtonModal>
              <ButtonModal
                onClick={handleGoToHome}
                disabled={!isButtonEnabled || /\d/.test(nomeConvidado)}
              >
                Voltar para a home
              </ButtonModal>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      )}
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
  textarea {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #9f9f9f;
  }

  .message {
    width: 85%;
    height: 150px;
    resize: none;
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
  .apagar {
    display: none;
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
