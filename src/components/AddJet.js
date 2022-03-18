import React, { useState, useContext } from "react";
import { JetContext } from "../context/JetContext";

function AddJet() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [id, setId] = useState(0);

  const [Jets, setJets] = useContext(JetContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateCountry = (e) => {
    setCountry(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    setJets((prevPlanes) => {
      return [...prevPlanes, { name: name, country: country, id: id }];
    });

    setName("");
    setCountry("");
    var a = id + 1;
    setId(a);
  };

  return (
    <div className="AddJet">
      <form onSubmit={add}>
        <label>Aircraft Name</label>
        <input type="text" name="name" value={name} onChange={updateName} />

        <label>Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={updateCountry}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddJet;
