import React from "react";
import "./style.css";
function Aside({ value1, value15, value30, value90 }) {
  return (
    <div id="wrapper">
      <h1>VOCÊ RECEBERÁ:</h1>
      <hr></hr>
      <section>
        <div id="desc">
          <p>Amanhã: </p>
          <p>Em 15 dias: </p>
          <p>Em 30 dias: </p>
          <p>Em 90 dias: </p>
        </div>
        <div id="values">
          <p>R${value1}</p>
          <p>R${value15}</p>
          <p>R${value30}</p>
          <p>R${value90}</p>
        </div>
      </section>
    </div>
  );
}

export default Aside;
