import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { List, XCircleFill } from "react-bootstrap-icons";
import { useMenu } from "../../contexts/MeuContext";

export default function Header({ actualPage }) {
  const { isOpen, openMenu, closeMenu } = useMenu();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div className="container">
        <div onClick={openMenu}>
          <List color="white" />
        </div>
        <Menu className={isOpen ? "menu open" : "menu"}>
          <div className="menu-header">
            <strong>Menu</strong>
            <button className="close-button" onClick={closeMenu}>
              <XCircleFill size={20} color="white" />
            </button>
          </div>

          <ul>
            <li>
              <button
                className="menu-button"
                onClick={() => {
                  closeMenu();
                  navigate("/");
                }}
              >
                Página inicial
              </button>
            </li>
            <li>
              <button
                className="menu-button"
                onClick={() => {
                  closeMenu();
                  navigate("/confirmar-presenca");
                }}
              >
                Confirmar presença
              </button>
            </li>

            <li>
              <button
                className="menu-button"
                onClick={() => {
                  closeMenu();
                  navigate("/mensagens");
                }}
              >
                Mensagem para os noivos
              </button>
            </li>
            <li>
              <button
                className="menu-button"
                onClick={() =>
                  window.open(
                    "https://sites.icasei.com.br/lucasekleria",
                    "_blank"
                  )
                }
              >
                Lista de presentes
              </button>
            </li>
          </ul>
        </Menu>

        <h1>{actualPage} </h1>
        <Logo src={logo} />
      </div>
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className="bar"></div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  h1 {
    font-family: "Comic Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 18px;
    /* identical to box height, or 90% */

    color: #ffffff;
  }
  .bar {
    width: 100%;
    height: 1px;
    margin-top: -5px;

    background: #ffffff;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    width: 100%;
    height: 54px;
    background: #000080;
  }
  .overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
`;

const Logo = styled.img`
  width: 33px;
  height: 33px;
`;

const Menu = styled.div`
  z-index: 1;
  display: none;
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: navy;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  transition: left 0.3s ease-in-out;

  &.open {
    display: block;
    left: 0;
  }

  font-family: "Comic Neue", sans-serif;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 60px;
    padding: 0;
  }

  ul li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button.menu-button {
    display: block;
    width: 90%;
    height: 40px;
    background-color: white;
    color: navy;
    font-size: 0.7rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px;
    margin: 20px 0;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
  }

  button.close-button {
    position: absolute;
    top: 10px;
    right: 10px;

    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }

  .menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .menu-header strong {
    font-weight: bold;
    font-size: 20px;
    margin-right: 10px;
    color: white;
  }
`;
