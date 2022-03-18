import React, { useState, useContext } from "react";
import Jet from "./Jet";
import { JetContext } from "../context/JetContext";

function JetList() {
  const [Jets, setJets] = useContext(JetContext);

  return (
    <div className="JetList">
      {Jets.map((plane) => {
        return <Jet name={plane.name} country={plane.country} key={plane.id} />;
      })}
    </div>
  );
}

export default JetList;
