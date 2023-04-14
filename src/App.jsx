import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import Home from "./components/Home";
import Confirm from "./components/Confirm";
import Mensage from "./components/Mensage";
import { MenuProvider } from "./contexts/MeuContext";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/confirmar-presenca" element={<Confirm />} />
            <Route path="/mensagens" element={<Mensage />} />
          </Routes>
        </MenuProvider>
      </BrowserRouter>
    </>
  );
}
