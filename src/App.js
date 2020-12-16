import React from "react";
import "./Sidebar.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import "./App.css"
  function App() {
    return (
      <div className="app">
        <div className="app_body">
          <Sidebar />
          <Chat />
        </div>
      </div>
    );
  }

export default App;
