import React from "react";
import { JetProvider } from "./context/JetContext";
import "./App.css";
import Nav from "./components/Nav";
import JetList from "./components/JetList";
import AddJet from "./components/AddJet";

function App() {
  return (
    <JetProvider>
      <div className="App">
        <Nav />
        <AddJet />
        <JetList />
      </div>
    </JetProvider>
  );
}

export default App;
