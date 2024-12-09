import React, { useState } from 'react';

function Calculadora() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor, insira números válidos');
      return;
    }

    switch (operacao) {
      case '+':
        setResultado(num1 + num2);
        break;
      case '-':
        setResultado(num1 - num2);
        break;
      case '*':
        setResultado(num1 * num2);
        break;
      case '/':
        setResultado(num2 !== 0 ? num1 / num2 : 'Divisão por zero');
        break;
      default:
        setResultado('Operação inválida');
    }
  };

  return (
    <div>
      <h2>Calculadora Simples</h2>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
        placeholder="Número 2"
      />
      <div>
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('*')}>*</button>
        <button onClick={() => calcular('/')}>/</button>
      </div>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}

export default Calculadora;
