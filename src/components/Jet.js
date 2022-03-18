import React from "react";

function Jet({ name, country }) {
  return (
    <div className="Jet">
      <h3 className="Jet__name">{name}</h3>
      <p className="Jet__country">{country}</p>
    </div>
  );
}

export default Jet;
