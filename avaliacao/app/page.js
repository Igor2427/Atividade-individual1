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
              Nasci no estado de Pernambuco na cidade de Recife, me formei no colégio Damas da instrução Cristã no ano de 2022 e atualmente estou cursando o curso de Ciencia da computação na Unicap(5 periodo)

            </td>
          </tr>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Tecnologias:</th>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "justify" }}>
              Python,Java,C,Css.

            </td>
             </tr>
        </tbody>
      </table>
    </div>

  );
}
