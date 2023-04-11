import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { List } from "react-bootstrap-icons";

export default function Home({ actualPage }) {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="container">
        <List color="white" />
        <h1>{actualPage} </h1>
        <Logo src={logo} />
      </div>
      <div className="bar"></div>
    </Header>
  );
}

const Header = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  h1 {
    width: 123px;
    height: 18px;
    left: 126px;
    top: 18px;

    font-family: "Comic Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
`;

const Logo = styled.img`
  width: 33px;
  height: 33px;
`;
