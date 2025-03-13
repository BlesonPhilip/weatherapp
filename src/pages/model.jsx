import React from "react";
import Nav from "../componets/navbar/nav";
import Foot from "../componets/Footer/foot";

const Model = () => {
  return (
    <>
      <Nav />
      <div className="box">
        <input type="text" placeholder="Enter the city " />
        <button>Get Weather</button>
      </div>
      <Foot />
    </>
  );
};

export default Model;
