import React, { useState } from "react";

function FormIMC({ calcularIMC }) {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        calcularIMC(altura, peso);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Altura (m):
                <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Ex: 1.75"
                required
                step="0.01"
                />
            </label>
            <label>
                peso (Kg):
                <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Ex: 70"
                required
                />
            </label>
            <button type="submit">calcular IMC</button>
        </form>
    );
}

export default FormIMC;