import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { List } from "react-bootstrap-icons";

export default function Footer() {
  const navigate = useNavigate();

  return <ContainerFooter></ContainerFooter>;
}

const ContainerFooter = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 10px;
  background: #000080;
`;

const Logo = styled.img``;
