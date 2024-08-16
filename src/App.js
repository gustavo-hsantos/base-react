import ParagrafoColorido from "./components/paragrafo/paragrafo";
import Button from "./components/button/button";

function App() {
  return (
    <div className="container">
      <ParagrafoColorido
        paragrafo="Olá, essa é minha primeira Quest de React"
        corTexto="orange"
        upper="upperCase"
      ></ParagrafoColorido>

      <Button
        event="Meu Primeiro Código React js"
        label="Baixar Código"
      ></Button>
    </div>
  );
}

export default App;
