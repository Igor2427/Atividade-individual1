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
        <caption> Mini-Biografia </caption>
        <tbody>
        <tr><th> Nome </th><th> idade</th></tr>
        <tr><th> Igor G </th><th> 20</th></tr>
        <tr><th colSpan="2">Nasci no estado de Pernambuco na cidade de Recife,gosto de Quebra-Cabeças, Video-Games e Ler, sou mais reservado e as vezes me perco nos meus pensamentos.</th></tr>
      </tbody>
      </table>
    </div>

  );
}
