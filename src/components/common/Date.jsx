import styled from "styled-components";

export default function Date() {
  return (
    <Container>
      <div className="containerInfo">
        <div className="containerDate">
          <p>
            <strong>Data e Hora:</strong>
          </p>
        </div>
        <div className="containerDate">
          <p>Data:</p>
          <p>30/09/2023</p>
        </div>
        <div className="containerDate">
          <p>Horário:</p>
          <p>19:30h</p>
        </div>
        <div className="containerDate">
          <p>
            <strong>endereço:</strong>
          </p>
        </div>
        <div className="containerDate">
          <p>Rua:</p>
          <p>Mailde Pereira Rocha</p>
        </div>
        <div className="containerDate">
          <p>Numero:</p>
          <p>615</p>
        </div>
        <div className="containerDate">
          <p>Bairro:</p>
          <p>Antônio Pimenta</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
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
