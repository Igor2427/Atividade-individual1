"use client";

import React, { useState, useEffect } from "react";

export default function JogoForca() {
  const palavras = ["REACT", "JAVASCRIPT", "NEXTJS", "PROGRAMA", "COMPUTADOR"]; // coloque mais palavras aqui
  const [palavra, setPalavra] = useState("");
  const [tentativas, setTentativas] = useState([]);
  const [erros, setErros] = useState(0);
  const maxErros = 6;

  useEffect(() => {
    novaPalavra();
  }, []);

  function novaPalavra() {
    const aleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(aleatoria);
    setTentativas([]);
    setErros(0);
  }

  function handleLetra(letra) {
    if (tentativas.includes(letra)) return;

    setTentativas([...tentativas, letra]);

    if (!palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  const venceu = palavra && palavra.split("").every((l) => tentativas.includes(l));
  const perdeu = erros >= maxErros;

  return (
    <div style={{ textAlign: "center" }}>

      <h2>
        {palavra.split("").map((l, i) =>
          tentativas.includes(l) || venceu || perdeu ? l + " " : "_ "
        )}
      </h2>

      <p>Letras tentadas: {tentativas.join(", ")}</p>

      {!venceu && !perdeu && (
        <div style={{ marginTop: "10px" }}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letra) => (
            <button
              key={letra}
              onClick={() => handleLetra(letra)}
              disabled={tentativas.includes(letra)}
              style={{
                margin: "2px",
                padding: "5px 10px",
                backgroundColor: tentativas.includes(letra)
                  ? "#ccc"
                  : "#1e3a8a",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: tentativas.includes(letra) ? "not-allowed" : "pointer"
              }}
            >
              {letra}
            </button>
          ))}
        </div>
      )}

      {venceu && <h3 style={{ color: "green" }}>Parabéns! Você venceu!</h3>}
      {perdeu && <h3 style={{ color: "red" }}>Você perdeu! A palavra era {palavra}</h3>}

      {(venceu || perdeu) && (
        <button
          onClick={novaPalavra}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Jogar Novamente
        </button>
      )}
    </div>
  );
}
