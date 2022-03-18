import React, { useState, createContext } from "react";

const JetContext = createContext();

function JetProvider(props) {
  const [Jets, setJets] = useState([]);

  return (
    <JetContext.Provider value={[Jets, setJets]}>
      {props.children}
    </JetContext.Provider>
  );
}

export { JetContext, JetProvider };
