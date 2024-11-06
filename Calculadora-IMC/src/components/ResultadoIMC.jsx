import React from "react";

function ResultadoIMC({ imc }) {
    const getClassificacao = (imc) => {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 24.9) return "Peso normal";
        if (imc < 29.9) return "Sobrepeso";
        if (imc < 34.9) return "Obesidade grau I";
        if (imc < 39.9) return "Obesidade grau II";
        return "Obesidade grau III";
    };

    return (
        <div>
            <h2>Resultado</h2>
            {imc ? (
                <>
                <p>Seu IMC: {imc.toFixed(2)}</p>
                <p>Classificação: {getClassificacao(imc)}</p>
                <img src="/imagem/imc2.png" alt="" />
                </>
            ) : (
                <p>Insira seus dados para calcular o IMC</p>
            )}
        </div>
    );
}

export default ResultadoIMC;