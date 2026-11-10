function caltemperatura(valor_original) {
    const valor_convertido = parseFloat(((valor_original * 9 / 5) + 32).toFixed(2));
    
    let classificacao = "";
    if (valor_original < 80) {
        classificacao = "Temperatura ideal";
    } else if (valor_original > 105) {
        classificacao = "Limite crítico";
    } else if (valor_original >= 95 && valor_original <= 105) {
        classificacao = "Acima da temperatura ideal";
    } else {
        classificacao = "Atencao / Intermediario";
    }

    return {
        tipo: "temperatura",
        valor_original: Number(valor_original),
        unidade_original: "°C",
        valor_convertido: valor_convertido, 
        unidade_convertida: "°F",
        classificacao: classificacao
    };
}

module.exports = caltemperatura;



