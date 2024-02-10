const perguntas = [
    {
      Pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      Pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "'55'",
        "Erro"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "shift()"
      ],
      correta: 0
    },
    {
      Pergunta: "Como você escreve um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita (igualdade em valor e tipo)",
        "Atribuição",
        "Comparação solta (igualdade em valor)"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o método usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual é o resultado de 3 + 2 + '7' em JavaScript?",
      respostas: [
        "12",
        "'57'",
        "Erro"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é a saída do seguinte código: console.log(typeof(undefined));",
      respostas: [
        "'undefined'",
        "null",
        "'object'"
      ],
      correta: 0
    },
    {
      Pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "shift()",
        "pop()",
        "splice()"
      ],
      correta: 1
    },
    {
      Pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas: [
        "função",
        "func",
        "function"
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarToral = document.querySelector('#acertos span')
  mostrarToral.textContent = corretas.size + 'de' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas ) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.Pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarToral.textContent = corretas.size + 'de' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  
  
  
    // remove as resposta, apos ter clonado
    quizItem.querySelector('dl dt').remove()
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  