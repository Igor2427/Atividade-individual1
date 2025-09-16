import Link from "next/link";
import JogoForca from "../../components/JogoForca";

export default function Jogo() {
  return (
    <div style={{ padding: "20px" }}>
      <Link href="/">
        <button style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          marginBottom: "20px",
          cursor: "pointer"
        }}>
          Voltar para o Portfólio
        </button>
      </Link>

      <h1 style={{ textAlign: "center" }}>Jogo da Forca</h1>

      {/* Aqui o jogo é renderizado */}
      <JogoForca />
    </div>
  );
}
