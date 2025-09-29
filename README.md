# 🏋️ Dados e Cálculos de Atletas (POO)

> [!NOTE]
> Projeto focado na implementação de **Programação Orientada a Objetos (POO)** em JavaScript para gerenciar e calcular dados de atletas de ginástica artística.

---

## ✨ Funcionalidades

A classe `Atleta` encapsula todos os dados e as lógicas de cálculo, oferecendo as seguintes funcionalidades:

- **🏷️ Cálculo de Categoria:** Determina a categoria do atleta (Infantil, Juvenil, etc.) com base na sua idade.
- **⚖️ Cálculo de IMC:** Calcula o Índice de Massa Corporal (IMC) usando a fórmula padrão.
- **📊 Cálculo de Média Válida:** Calcula a média das notas do atleta, descartando a maior e a menor nota recebida.

---

🛠️ Tecnologias e Conceitos Focais

Este projeto foi construído com foco nos seguintes pilares do JavaScript e da POO:

- **`class` (POO):** Estrutura central para criar o molde `Atleta`, armazenando seus atributos e métodos.
- **`constructor`:** Método para inicializar os atributos de cada objeto atleta no momento de sua criação.
- **Encapsulamento:** Organização da lógica de cálculo (`calcula*`) e dos métodos de acesso (`obtem*`) dentro da própria classe, protegendo e organizando o código.
- **Métodos de Array:** Uso de `.sort()`, `.slice()` e `.reduce()` para manipular as notas de forma eficiente e declarativa.
- **Estruturas Condicionais:** Uso de `if/else if` para definir a classificação do atleta por idade.

---

## 🚀 Como Executar

1.  **Clone o repositório (exemplo):**
    ```bash
    git clone https://github.com/seu-usuario/dados-atletas.git
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd dados-atletas
    ```
3.  **Execute o script com Node.js:**
    ```bash
    node dados-atletas.js
    ```

---

📋 Exemplo de Uso

O código demonstra a instanciação da classe `Atleta` e a chamada dos seus métodos para exibir os resultados.

```javascript
// Declara e instancia um objeto da classe Atleta
const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [
  10, 9.34, 8.42, 10, 7.88,
]);

// Exibe um resumo completo dos dados e cálculos do atleta
exibirInformacoes(atleta);
```

---

🖥️ Saída (Resultado no Console)

Ao executar o arquivo `dados-atletas.js`, o resultado formatado no console será:

```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 80
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.253333333333334
```