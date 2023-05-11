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
        Queridos amigos e familiares <br></br>É com muita alegria que convidamos
        vocês para compartilhar conosco o dia mais importante de nossas vidas: o
        nosso casamento. Como pessoas de fé, acreditamos que o amor é um
        presente maravilhoso que Deus nos dá, e estamos gratos por ter
        encontrado um ao outro neste mundo. Nosso casamento será uma celebração
        da nossa fé e do amor que sentimos um pelo outro. Estamos ansiosos para
        compartilhar este momento especial com vocês e agradecer a Deus por nos
        abençoar com um ao outro. Esperamos que a cerimônia seja um testemunho
        do amor de Deus e da nossa dedicação um ao outro. Gostaríamos de
        convidá-los para visitar o nosso site de casamento, onde vocês podem
        encontrar informações sobre a cerimônia, a recepção e outras atividades
        relacionadas ao nosso grande dia. O site também tem detalhes sobre como
        presentear o casal, se assim desejarem. Agradecemos a sua presença e
        orações, e esperamos ver vocês lá! Com amor e gratidão,<br></br>Kléria e
        Lucas
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
