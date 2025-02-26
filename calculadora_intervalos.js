// Dados estáticos extraídos do Excel
const procedimentosX = [
    "LIMPEZA DE PELE",
    "BOTOX",
    "PREENCHEDOR",
    "BIOESTIMULADOR",
    "SPECTRA",
    "HOLLYWOOD PEEL",
    "SPECTRA TATUAGEM",
    "FOTONA VÉU DE NOIVA",
    "FOTONA ABLATIVO",
    "FOTONA 4D",
    "RESURFX",
    "RESURFX CAPILAR",
    "DEPILAÇÃO",
    "MORPHEUS",
    "ULTRAFORMER",
    "COOLSCULPTING",
    "CM SLIM",
    "HOT SUMMER",
    "X-WAVE",
    "VANQUISH",
    "EXILIS CORPORAL",
    "ONDA COOLWAVES",
    "INTRADERMO",
    "MICROAGULHAMENTO",
    "EXILIS FACIAL",
    "FREEZE FACIAL",
    "FREEZE",
    "CARBOXITERAPIA",
    "PEELING QUÍMICO",
    "PEELING DE DIAMANTE"
];

let intervalos = [
    ["30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["15 dias", "4 a 6 meses", "0", "0", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "0", "15 dias", "15 dias", "15 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "0", "15 dias"],
    ["15 dias", "0", "0", "0", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "15 dias", "0", "15 dias", "30 dias", "15 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "0", "15 dias"],
    ["30 dias", "0", "0", "30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "30 dias", "30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "0", "15 dias"],
    ["7 dias", "0", "0", "0", "7 a 14 dias", "7 dias", "0", "0-7 dias", "0-15 dias", "0", "0-15 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias"],
    ["7 dias", "0", "0", "0", "7 dias", "7-14 dias", "0", "7 dias", "7 dias", "7 dias", "7 dias", "0", "7 dias", "7 dias", "0-7 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "7 dias", "0", "0", "7 dias", "7 dias"],
    ["15 dias", "0", "0", "0", "0", "0", "30 a 40 dias", "15 dias", "15 dias", "15 dias", "15 dias", "0", "0", "0", "15-30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "15 dias", "0"],
    ["15 dias", "0", "0", "0", "15 dias", "15 dias", "0", "30 dias", "30 dias", "30 dias", "30 dias", "0", "7-14 dias", "15 dias", "7-15 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "30 dias", "15 dias"],
    ["15 dias", "0", "0", "0", "7-14 dias", "7-14 dias", "7-14 dias", "30 dias", "30 dias", "30 dias", "30 dias", "0", "7-14 dias", "30 dias", "7-14 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "0", "15 dias"],
    ["15 dias", "0", "0", "0", "7-14 dias", "7-14 dias", "7-15 dias", "30 dias", "30 dias", "45 dias", "30 dias", "0", "7-14 dias", "15-30 dias", "7-14 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7-14 dias", "7-14 dias", "0", "0", "0", "7-14 dias"],
    ["15 dias", "0", "0", "0", "15 dias", "15 dias", "0", "30 dias", "30 dias", "30 dias", "30 dias", "0", "15 dias", "15-30 dias", "7-14 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7-14 dias", "7-14 dias", "0", "0", "0", "7-14 dias"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["7 dias", "0", "0", "0", "0", "0", "0", "7 dias", "7 dias", "7 dias", "7 dias", "0", "30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "7 dias", "0", "0", "0", "0"],
    ["30 dias", "0", "0", "0", "15 dias", "15 dias", "0", "15 dias", "15 dias", "15 dias", "15 dias", "0", "15 dias", "30 dias", "15 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "0", "0", "30 dias", "30 dias"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "0", "0", "0", "0", "6 meses", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7-14 dias", "7-14 dias", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "15 dias", "3 meses", "7 dias", "0", "0", "0", "0", "15 dias", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "48 horas", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "15 dias", "0", "7 dias", "7 dias", "7 dias", "7 dias", "15 dias", "0", "0", "0", "0", "7 dias", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "48 horas", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "0", "7 dias", "0", "7 dias", "0", "7 dias", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "0", "0", "7 dias", "7 dias", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "0", "0", "7 dias", "21 dias", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "30 dias", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "30 dias", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "7 dias", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "7 dias", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "0", "0", "0", "0", "0", "7 dias", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7 dias", "0", "0"],
    ["7-14 dias", "0", "0", "0", "7-14 dias", "7-14 dias", "0", "30 dias", "30 dias", "30 dias", "30 dias", "0", "7-14 dias", "7-14 dias", "7-14 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "7-14 dias", "7-14 dias", "0", "0", "30 dias", "30 dias"],
    ["30 dias", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "30 dias", "30 dias"]
];

// Padronizar matriz para evitar inconsistências
const padronizarMatriz = () => {
    const colunasEsperadas = procedimentosX.length;
    intervalos = intervalos.map(linha => {
        const diferenca = colunasEsperadas - linha.length;
        return diferenca > 0 ? [...linha, ...Array(diferenca).fill("0")] : linha;
    });
};

// Preencher selects com os dados
function popularSelects() {
    const selectX = document.getElementById("procedimentoX");
    const selectY = document.getElementById("procedimentoY");

    procedimentosX.forEach((procedimento, index) => {
        const optionX = document.createElement("option");
        optionX.value = index;
        optionX.textContent = procedimento;
        selectX.appendChild(optionX);

        const optionY = document.createElement("option");
        optionY.value = index;
        optionY.textContent = procedimento;
        selectY.appendChild(optionY);
    });
}

// Função para calcular o intervalo
function calcularIntervalo() {
    const selectX = document.getElementById("procedimentoX").value;
    const selectY = document.getElementById("procedimentoY").value;

    if (selectX === "" || selectY === "") {
        document.getElementById("intervaloResultado").textContent = "Por favor, selecione ambos os procedimentos.";
        return;
    }

    try {
        const xIndex = parseInt(selectX);
        const yIndex = parseInt(selectY);

        if (isNaN(xIndex) || isNaN(yIndex)) {
            throw new Error("Índices inválidos");
        }

        const intervalo = intervalos[xIndex][yIndex] || "0";
        console.log(`Índices selecionados: X=${xIndex}, Y=${yIndex}`);
        console.log(`Intervalo obtido: ${intervalo}`);
        document.getElementById("intervaloResultado").textContent = `O intervalo entre os procedimentos é: ${intervalo}`;
    } catch (error) {
        console.error("Erro ao acessar a matriz de intervalos:", error);
        document.getElementById("intervaloResultado").textContent = "Erro ao calcular o intervalo. Verifique os procedimentos selecionados.";
    }
}

// Inicializar ao carregar a página
window.onload = () => {
    padronizarMatriz();
    popularSelects();
};
