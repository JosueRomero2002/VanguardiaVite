import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import LOGIN from "./pages/login/mylogin.js";

import MENU from "./pages/menu/menu.js";

import EDITPIZZA from "./pages/editPizza/editPizza.js";
import { Container, Content } from "rsuite";

function App() {
  return (
    <Container>
      <Content>
        <BrowserRouter>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Routes>
            <Route path="/" element={<LOGIN />} />
            <Route path="/menu" element={<MENU />} />
            <Route path="/editpizza" element={<EDITPIZZA />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </Container>
  );
}

export default App;
