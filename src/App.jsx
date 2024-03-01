import React, { useState } from 'react';

function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);

    const calcularImc = () => {
        const alturaMetros = parseFloat(altura) / 100;
        const imcCalculado = parseFloat(peso) / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2));
    };

    return (
        <div className="form">
            <h1>Calculadora de IMC</h1>
            <input type="number" placeholder="Insira sua altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            <input className='input2' type="number" placeholder="Insira seu peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            <button onClick={calcularImc}>Calcular IMC</button>
            {imc && (
                <p>
                    Seu IMC é <strong>{imc}</strong>.
                    {imc < 18.5
                        ? ' Você está abaixo do peso.'
                        : imc < 24.9
                            ? ' Seu peso está normal.'
                            : ' Você está acima do peso.'}
                </p>
            )}
        </div>
    );
}

export default App;
