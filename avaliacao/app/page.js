export default function Home() {
  return (
    <h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src="/assets/images/Foto.jpg" width="500" height="500" />
      </div>
      
      <table border="1">
        <caption> Mini-Biografia </caption>
        <tbody>
        <tr><th> Nome </th><th> idade</th></tr>
        <tr><th> Igor G </th><th> 20</th></tr>
        <tr><th colSpan="2">Nasci no estado de Pernambuco na cidade de Recife,gosto de Quebra-Cabeças, Video-Games e Ler, sou mais reservado e as vezes me perco nos meus pensamentos.</th></tr>
      </tbody>
      </table>
    </h1>

  );
}
