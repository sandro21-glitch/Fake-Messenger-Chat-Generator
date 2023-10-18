import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ChatContext from "./context/ChatContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChatContext>
      <App />
    </ChatContext>
  </React.StrictMode>
);
