"use client";

import React, { useState, useEffect } from "react";

const LISTA_PALAVRAS = [
  "REACT", "JAVASCRIPT", "NEXTJS", "COMPONENTE", "HOOKS", "ESTADO", "PROPRIEDADES",
  "BACKEND", "FRONTEND", "NODE", "BANCO", "API", "SERVIDOR", "CLIENTE", "CSS",
  "HTML", "FUNCAO", "OBJETO", "ARRAY", "VARIAVEL", "CONSTANTE", "ASYNC",
  "AWAIT", "PROMISE", "STRING", "NUMERO", "BOOLEAN", "IMPORT", "EXPORT",
  "ROTAS", "PROJETO", "DEPLOY", "NAVEGADOR", "PACOTE", "BIBLIOTECA",
  "FRAMEWORK", "MODULO", "EVENTO", "ESTRUTURA", "FORCA"
];

export default function JogoForca() {
  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [status, setStatus] = useState("jogando"); 

  
  useEffect(() => {
    novaPartida();
  }, []);

  function novaPartida() {
    const aleatoria = LISTA_PALAVRAS[Math.floor(Math.random() * LISTA_PALAVRAS.length)];
    setPalavra(aleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativasRestantes(6);
    setStatus("jogando");
  }

  function verificarLetra(letra) {
    if (status !== "jogando") return;

    letra = letra.toUpperCase();
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes(tentativasRestantes - 1);
    }
  }

  
  useEffect(() => {
    if (tentativasRestantes === 0) {
      setStatus("derrota");
    } else {
      const venceu = palavra.split("").every((letra) => letrasCorretas.includes(letra));
      if (venceu) setStatus("vitoria");
    }
  }, [letrasCorretas, tentativasRestantes]);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif", backgroundColor: "#0A192F", minHeight: "100vh", color: "white", padding: "20px" }}>
      
      <h1 style={{ color: "#64ffda" }}>🎯 Jogo da Forca</h1>

  
      <svg height="250" width="200" style={{ marginBottom: "20px" }}>
     
        <line x1="20" y1="230" x2="180" y2="230" stroke="white" strokeWidth="4" />
        <line x1="50" y1="20" x2="50" y2="230" stroke="white" strokeWidth="4" />
        <line x1="50" y1="20" x2="150" y2="20" stroke="white" strokeWidth="4" />
        <line x1="150" y1="20" x2="150" y2="50" stroke="white" strokeWidth="4" />
      
        {tentativasRestantes <= 5 && <circle cx="150" cy="70" r="20" stroke="white" strokeWidth="4" fill="transparent" />}
      
        {tentativasRestantes <= 4 && <line x1="150" y1="90" x2="150" y2="150" stroke="white" strokeWidth="4" />}
        
        {tentativasRestantes <= 3 && <line x1="150" y1="110" x2="120" y2="130" stroke="white" strokeWidth="4" />}
        {tentativasRestantes <= 2 && <line x1="150" y1="110" x2="180" y2="130" stroke="white" strokeWidth="4" />}
       
        {tentativasRestantes <= 1 && <line x1="150" y1="150" x2="120" y2="190" stroke="white" strokeWidth="4" />}
        {tentativasRestantes <= 0 && <line x1="150" y1="150" x2="180" y2="190" stroke="white" strokeWidth="4" />}
      </svg>

    
      <div style={{ fontSize: "2rem", letterSpacing: "10px", marginBottom: "20px" }}>
        {palavra.split("").map((letra, idx) => (
          <span key={idx}>{letrasCorretas.includes(letra) ? letra : "_"}</span>
        ))}
      </div>

     
      <p>Tentativas restantes: {tentativasRestantes}</p>
      <p>Letras erradas: {letrasErradas.join(", ")}</p>

    
      <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: "8px", maxWidth: "600px", margin: "0 auto" }}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letra) => (
          <button
            key={letra}
            onClick={() => verificarLetra(letra)}
            disabled={letrasCorretas.includes(letra) || letrasErradas.includes(letra) || status !== "jogando"}
            style={{
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: letrasCorretas.includes(letra)
                ? "#64ffda"
                : letrasErradas.includes(letra)
                ? "#ff4d4d"
                : "#112240",
              color: "white",
              border: "1px solid #64ffda",
              cursor: "pointer"
            }}
          >
            {letra}
          </button>
        ))}
      </div>

  
      {status !== "jogando" && (
        <div style={{ marginTop: "20px" }}>
          {status === "vitoria" ? (
            <h2 style={{ color: "#64ffda" }}>🎉 Parabéns! Você venceu! 🎉</h2>
          ) : (
            <h2 style={{ color: "#ff4d4d" }}>💀 Você perdeu! A palavra era: {palavra}</h2>
          )}
          <button
            onClick={novaPartida}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#64ffda",
              color: "#0A192F",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            🔄 Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
