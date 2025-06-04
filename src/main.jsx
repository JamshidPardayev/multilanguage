import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>
);
