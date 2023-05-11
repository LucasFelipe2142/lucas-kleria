import styled from "styled-components";
import { useNavigate } from "react-router";
import Header from "./common/Header";
import photo from "../assets/photo.png";
import Footer from "./common/Footer";
import Countdown from "./Countdown";
import { useMenu } from "../contexts/MeuContext";

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
      <Img_first src={photo} />
      <Countdown />
      <p className="acknowledgment">
        Prezados amigos e familiares,
        <br></br>É com imensa alegria que os convidamos a compartilhar conosco o
        dia mais importante de nossas vidas: o nosso casamento. Como pessoas de
        fé, acreditamos que o amor é um presente maravilhoso que Deus nos
        concede, e somos gratos por termos encontrado um ao outro neste vasto
        mundo. Nossa união será uma celebração da nossa fé e do intenso amor que
        nutrimos um pelo outro.
        <br></br>
        Ansiamos por compartilhar este momento especial com cada um de vocês e
        expressar nossa profunda gratidão a Deus por nos abençoar com a dádiva
        mútua de nossas vidas. Desejamos que nossa cerimônia seja um testemunho
        do amor divino e do nosso compromisso inabalável um com o outro.
        <br></br>
        No nosso site, vocês encontrarão os detalhes sobre a cerimônia,
        incluindo o local e o horário. Além disso, disponibilizamos um
        formulário de confirmação de presença para que possamos planejar tudo
        com antecedência e receber cada um de vocês com alegria.
        <br></br>
        Sabemos quemuitos de vocês desejam nos presentear e estamos muito gratos
        por seu amor e generosidade. Pensando nisso, criamos uma lista de
        presentes online, onde vocês podem encontrar sugestões de presentes que
        nos seriam úteis em nossa nova vida juntos. No entanto, a maior dádiva
        que vocês podem nos oferecer é a sua presença e suas orações.
        <br></br>
        Também há um espaço para deixarem uma mensagem especial para nós, onde
        poderão compartilhar seus bons desejos e palavras de encorajamento.
        Essas mensagens nos tocarão profundamente e serão lembranças preciosas
        ao longo dos anos.
        <br></br>
        Agradecemos imensamente por fazerem parte de nossas vidas e por estarem
        presentes neste dia tão significativo para nós. Compartilhar este
        momento com pessoas queridas como vocês torna tudo ainda mais especial.
        Esperamos vê-los no nosso casamento e celebrar juntos o amor e a bênção
        de Deus.
        <br></br>
        <br></br>
        Com todo o nosso amor e gratidão,
        <br></br>
        Kléria e Lucas
      </p>
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
