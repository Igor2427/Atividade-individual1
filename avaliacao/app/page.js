import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px", alignItems: "flex-start" }}>
      
      {/* Coluna da foto + botão */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <img
          src="/assets/images/Foto.jpg"
          style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "8px" }}
        />
        <Link
          href="/jogo"
          style={{
            padding: "10px 20px",
            backgroundColor: "#64ffda",
            color: "#0A192F",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          Jogar Forca
        </Link>
      </div>

      {/* Tabela ao lado da foto */}
      <table border="1" style={{ borderCollapse: "collapse", width: "500px" }}>
        <caption style={{ captionSide: "top", fontWeight: "bold", padding: "8px" }}>
          Currículo
        </caption>
        <tbody>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Nome: Igor Gabriel Lira Uchôa</th>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Idade: 20</th>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Sobre:</th>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "justify" }}>
              Nasci no estado de Pernambuco na cidade de Recife, me formei no colégio Damas da instrução Cristã no ano de 2022 e atualmente estou cursando o curso de Ciência da Computação na Unicap (5º período)
            </td>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Tecnologias:</th>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "justify" }}>
              Python, Java, C, CSS.
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
