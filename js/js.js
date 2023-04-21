// Obtém referências aos elementos HTML
const valorInicial = document.querySelector('input[type="inicial"]');
const taxaJuros = document.querySelector('input[type="taxa"]');
const numParcelas = document.querySelector('input[type="parcelas"]');
const rendimentoFinal = document.querySelector('input[type="rendimento"]');
const botaoCalcular = document.querySelector('button');

// Adiciona um ouvinte de evento de clique ao botão de calcular
botaoCalcular.addEventListener('click', calcularInvestimento);

function calcularInvestimento() {
  // Obtém os valores inseridos pelo usuário
  const valorInicialFloat = parseFloat(valorInicial.value);  
  const taxaJurosFloat = parseFloat(taxaJuros.value);
  const numParcelasInt = parseInt(numParcelas.value);

  // Realiza os cálculos necessários para obter o rendimento final
  const jurosSimples = valorInicialFloat * (taxaJurosFloat / 100) * numParcelasInt;
  const montanteFinal = valorInicialFloat + jurosSimples;

  // Exibe o resultado na caixa de saída
  rendimentoFinal.value = montanteFinal.toFixed(2);
}
