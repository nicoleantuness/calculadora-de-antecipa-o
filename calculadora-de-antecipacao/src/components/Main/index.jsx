import React from "react";
import api from "../../api.js";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./style.css";

function Main({ setValue1, setValue15, setValue30, setValue90 }) {
  const [value, setValue] = useState("");
  const [parcel, setParcel] = useState("");
  const [mdr, setMdr] = useState("");
  
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      api
        .post("/", data, {
          headers: { "Content-Type": "application/json" },
          data: {
            amount: value,
            installments: parcel,
            mdr: mdr,
            days: [1, 15, 30, 90],
          },
        })
        .then((response) => {
          const obj = response.data;

          setValue1(obj[1]);
          setValue15(obj[15]);
          setValue30(obj[30]);
          setValue90(obj[90]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <header>
        <h1>Simule sua Antecipação</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Informe o valor da venda *</span>
          <input
            {...register("amount")}
            type="number"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </label>
        <label>
          <span>Em quantas parcelas *</span>
          <input
            {...register("installments")}
            type="number"
            value={parcel}
            onChange={(event) => setParcel(event.target.value)}
          ></input>
          <p>Máximo de 12 parcelas *</p>
        </label>
        <label>
          <span>Informe o percentual de MOR *</span>
          <input
            {...register("mdr")}
            type="number"
            value={mdr}
            onChange={(event) => setMdr(event.target.value)}
          ></input>
        </label>
        <button type="submit">Simular</button>
      </form>
    </main>
  );
}

export default Main;
