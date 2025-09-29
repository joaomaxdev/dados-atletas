class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    // Peso dividid pela altura ao quadrado
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    // Cópia das notas para ordenação (evita modificar o array original)
    let notasOrdenadas = this.notas.slice();

    // Ordena as notas numericamente (do menor para o maior)
    notasOrdenadas.sort((a, b) => a - b);

    // Seleciona as 3 notas válidas (índices 1, 2 e 3)
    let notasValidas = notasOrdenadas.slice(1, 4);

    // Soma das notas válidas usando reduce (maneira moderna de somar arrays)
    let somaNotas = notasValidas.reduce((total, nota) => total + nota, 0);

    // Retorna a média (soma / 3)
    return somaNotas / notasValidas.length;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    // Retorna as notas originais como string separada por vírgulas
    return this.notas.join(',');
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}


const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

// Função para exibir a saída formatada no console
function exibirInformacoes(atleta) {
  console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
  console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
  console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
  console.log(`Altura: ${atleta.obtemPesoAtleta()}`);
  console.log(`Notas: ${atleta.obtemNotasAtleta()}`);

  // Resultados calculados
  console.log(`Categoria: ${atleta.obtemCategoria()}`);
  console.log(`IMC: ${atleta.obtemIMC()}`);
  console.log(`Média válida: ${atleta.obtemMediaValida()}`);
}

exibirInformacoes(atleta);