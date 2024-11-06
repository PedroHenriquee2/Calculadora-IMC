import { useState } from 'react'
import FormIMC from './components/FormIMC';
import ResultadoIMC from './components/ResultadoIMC';
import './App.css'

function App() {
  const [imc, setIMC] = useState(null);

const calcularIMC = (altura, peso) => {
  const alturaMetros = parseFloat(altura);
  const pesoKg = parseFloat(peso);
  const ResultadoIMC = pesoKg / (alturaMetros * alturaMetros);
  setIMC(ResultadoIMC);
};

return (
  <div className='App'>
    <h1>Calculadora de IMC</h1>
    <FormIMC calcularIMC={calcularIMC} />
    <ResultadoIMC imc={imc} />
  </div>
);
}

export default App