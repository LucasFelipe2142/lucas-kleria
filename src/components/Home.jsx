import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import Header from "./common/Header";

export default function Home() {
  const navigate = useNavigate();
  const ACTUAL_PAGE = "Kléria & Lucas";
  return (
    <Container>
      <Header actualPage={ACTUAL_PAGE} />
    </Container>
  );
}

const Container = styled.div``;
