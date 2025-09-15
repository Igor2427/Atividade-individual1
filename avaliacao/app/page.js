export default function Home() {
  return (
    
      <div style={{ display: "flex",
      alignItems: "flex-start",
      padding: "20px",
      gap: "20px",}}>
  <img
    src="/assets/images/Foto.jpg"
    style={{ width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px" }}/>

      
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <caption style={{ captionSide: "top", fontWeight: "bold", padding: "8px" }}>
          Mini-Biografia
        </caption>
        <tbody>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Nome: Igor Gabriel Lira Uchôa</th>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Idade: 20</th>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Sobre</th>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "justify" }}>
              Nasci no estado de Pernambuco na cidade de Recife, gosto de Quebra-Cabeças, Video-Games e Ler, sou mais reservado e às vezes me perco nos meus pensamentos.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}
