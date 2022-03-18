import React, { useContext } from "react";
import { JetContext } from "../context/JetContext";


function Nav() {
  const [Jets, setJets] = useContext(JetContext);

  return (
    <div className="Nav">
      <h2>JET AIRCRAFTS LIST</h2>
      <p>Total aircraft in the list: {Jets.length}</p>
    </div>
  );
}

export default Nav;
