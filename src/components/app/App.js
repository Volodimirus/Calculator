import Calculator from "../Calculator/Calculator";
import Container from "../Container/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container horizontalCenter verticalMargins={20}>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
