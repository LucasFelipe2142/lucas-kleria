import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./common/Header";
import Footer from "./common/Footer";

import { useMenu } from "../contexts/MeuContext";

export default function Results() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [guests, setGuests] = useState([]);
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const ACTUAL_PAGE = "Confirmações e Mensagens";

  function handleMenuClick() {
    toggleMenu();
  }

  useEffect(() => {
    axios
      .get("https://api.casamento-lucas-kleria.com.br/api/guests")
      .then((res) => {
        setGuests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://api.casamento-lucas-kleria.com.br/api/messages")
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (
      email === "lucasfelicio378@gmail.com" ||
      email === "Kleriagusmao@gmail.com"
    ) {
      setAccessGranted(true);
    } else {
      setAccessGranted(false);
    }
  }

  return (
    <Container>
      <Header actualPage={ACTUAL_PAGE} onMenuClick={handleMenuClick} />
      {isMenuOpen && <MenuOverlay onClick={handleMenuClick} />}
      {!accessGranted ? (
        <FormContainer>
          <Form onSubmit={handleFormSubmit}>
            <FormLabel htmlFor="email">
              Digite seu email para confirmação de acesso:
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FormButton
              type="submit"
              onClick={() => {
                if (
                  email !== "lucasfelicio378@gmail.com" &&
                  email !== "Kleriagusmao@gmail.com"
                )
                  alert("Acesso permitido somente aos noivos");
              }}
            >
              Submit
            </FormButton>
          </Form>
        </FormContainer>
      ) : (
        <>
          <Header actualPage={ACTUAL_PAGE} onMenuClick={handleMenuClick} />
          {isMenuOpen && <MenuOverlay onClick={handleMenuClick} />}
          <Container2>
            <Box>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Convidados Confiramdos</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {guests.map((guest) => (
                    <TableRow key={guest._id}>
                      <TableData>{guest.name}</TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </Box>

            <Box>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Mensagens para os noivos</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <TableRow key={message._id}>
                      <TableData>
                        <strong>{message.name}</strong>
                        <br />
                        <br />
                        <div className="text">{message.message}</div>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </Box>
          </Container2>
          <Footer />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 54px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  background-color: white;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
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
`;

const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 48px;
  background: #000080;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
`;

const Container2 = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Box = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  padding: 20px;
  margin-bottom: 20px;
  width: 90%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #ddd;
`;

const TableRow = styled.tr`
  max-width: 90%;
  &:not(:first-child) {
    border-top: 1px solid #ddd;
  }
  border-bottom: 1px solid #ddd;

  word-wrap: break-word;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #000080;
  color: white;
`;

const TableData = styled.td`
  text-align: left;
  padding: 10px;
  width: 80%;
  .text {
    width: 80%;
    text-align: justify;
  }
`;
