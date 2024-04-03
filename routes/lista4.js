const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const numero = req.body.notas;
  const aluno = req.body.nome;
  // for(i=0;i<numero.length; i++){

  //   console.log(numero[i])
  // }

  let soma = 0;
  for (let n of numero) {
    // "of" pega o que tem no indice o "in" o indice
    soma += n;
    // soma = soma + n mesma coisa a cima funciona com +/*_
  }
  const media = soma / numero.length;
  res.json({ aluno, media });
});

router.post("/ex2", function (req, res) {
  const valores = req.body;
  let maior = valores[0];
  let menor = valores[0];

  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maior) maior = valores[i];
    if (valores[i] < menor) menor = valores[i];
  }

  res.json({ maior, menor });
});

router.post("/ex3", function (req, res) {

  const lista = []
  for (let i = 1; i <= 10; i++) {
    lista.push(i);
  }

  res.json(lista);

});

router.post('/ex4', function(req, res){

  const lista = []
  for (let i = 1; i <= 10; i++) {
    lista.push(i);
  }

  lista.reverse();
  res.send(lista)
});

router.post('/ex5', function(req, res){
  const lista = []
  let contador = 0;
  for (let i = 101; contador < 10; i++) {
      lista.push(i)
      contador++;
  }
  res.json(lista);
});

router.post('/ex6', function(req, res){
  const lista = req.body;
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
      soma = soma + lista[i];
  }
  res.json(soma);

});

router.post("/ex7", (req, res) => {
  const { N } = req.body;
  const valores = [];
  for (let i = 1; i < N; i++) {
      if (i % 2 === 0) {
          valores.push(i)
      }
  }
  res.json(valores);
});

router.post("/ex8", (req,res)=>{
  const{ valores} = req.body
  let contador = 0;
  for(let i = 0; i < valores.length; i++){
    if (valores[i] < 0) {
      contador ++
    }
  }
  res.json(contador)

});

router.post("/ex9", (req,res)=>{
  const {valores} = req.body;
    let lista = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < 0){
           lista.push(valores[i]);
        }

    }
    res.json(lista);
});

router.post("/ex10", (req, res) => {
  const {valores} = req.body;
  let dentroDoIntervalo = 0;
  let foraDoIntervalo = 0;

  for (let i = 0; i < valores.length; i++) {
      if (valores[i] >= 10 && valores[i] <= 20) {
        dentroDoIntervalo++;
      }else {
        foraDoIntervalo++;
      };
  }

  res.json({ dentroDoIntervalo, foraDoIntervalo });
});

router.post("/ex11", (req, res) => {
  const {valores} = req.body;
  let soma = 0;

  for (let i = 0; i < valores.length; i++) {
      soma += valores[i];
  }

  const media = Math.floor(soma / valores.length);
  res.json({ media });
});

router.post("/ex12", (req, res) => {
  const {N} = req.body;
  let soma = 0;

  for (let i = 0; i < N.length; i++) {
      soma += N[i];
  }

  const media = Math.floor(soma / N.length); 
  res.json({ media });
});

router.post("/ex13", (req, res) => {
  const {N} = req.body;
  const lista = [];
  for (let i = 0; i < N.length; i++) {
      const triplo = N[i] * 3;
      lista.push(triplo);
  }
  res.json({ lista });
});

router.post("/ex14", (req, res) => {
  const {N} = req.body;
  const lista = [];
  for (let i = 0; i < N.length; i++) {
      const dobro = N[i] * 2;
      lista.push(dobro);
  }
  res.json({ lista });
});

router.post('/ex15', function(req, res){
  const {N} = req.body
  let soma = 0
  for( let i  = 0; i < N.length; i++){
    if(N[i]< 40){
      soma = soma + N[i]
    }
  }
    res.json(soma)
});

router.post('/ex16', function(req, res){
   const{ntm,vm} = req.body;
   let total = 0;

   for (let i = 0; i < vm.length; i++) {
    total = total + vm[i];
}
    res.json(`valor medio: ${total/ntm}`)
});

router.post("/ex17", (req, res) => {
  const {inicial, final } = req.body;
  let impares = [];
  let soma = 0;
  for (let i = inicial; i <= final; i++) {
      if (i % 2 !== 0) {
          impares.push(i);
          soma += i;
      }
  }
  res.json({ impares, soma });
});

router.post("/ex18", (req, res) => {
  const {valores} = req.body;
  let maior = valores[0];
  let menor = valores[0];
  let soma = 0;

  for (let i = 0; i < valores.length; i++) {
      const v = valores[i];
      if (v > maior){
        maior = v;
      } 
      else if (v < menor){
        menor = v
      };
      soma = soma + v;
  }

  const media = soma / valores.length;
  res.json({ maior, menor, media });
});

//......
let alunos = [];
for(let i = 1; i <= 500; i++) {
    let aluno = {
        "id": i,
        "nome": "Aluno " + i,
        "idade": Math.floor(Math.random() * (30 - 18 + 1)) + 18,
        "codigoCurso": Math.floor(Math.random() * (3 - 1 + 1)) + 1
    };
    alunos.push(aluno);
}
//....
router.post("/ex19", (req, res) => {
  let contagemCursos = [0, 0, 0];
    let contagemIdade = [0, 0, 0];
    let somaIdades = [0, 0, 0];

    for(let aluno of alunos) {
        contagemCursos[aluno.codigoCurso - 1]++;
        somaIdades[aluno.codigoCurso - 1] += aluno.idade;
        if(aluno.idade >= 20 && aluno.idade <= 25) {
            contagemIdade[aluno.codigoCurso - 1]++;
        }
    }

    let menorMediaIdade = Infinity;
    let cursoMenorMediaIdade = -1;
    for(let i = 0; i < 3; i++) {
        let mediaIdade = somaIdades[i] / contagemCursos[i];
        if(mediaIdade < menorMediaIdade) {
            menorMediaIdade = mediaIdade;
            cursoMenorMediaIdade = i + 1;
        }
    }

    res.json({
        "Número de alunos por curso": contagemCursos,
        "Número de alunos com idade entre 20 e 25 anos, por curso": contagemIdade,
        "Curso com menor média de idade": cursoMenorMediaIdade
    });
});

router.post("/ex20", (req, res) => {
  let Tabuada = '';
  for (let i = 1; i <= 10; i++) {
      Tabuada += `${i}:\n`;
      for (let j = 1; j <= 10; j++) {
          Tabuada += `${i} x ${j} = ${i * j}\n`;
      }
      Tabuada += '\n'; 
  }
  res.send(Tabuada);
});

// Gera um array de 200 pessoas
let pessoas = [];
for(let i = 1; i <= 200; i++) {
    let pessoa = {
        "id": i,
        "nome": "Pessoa " + i,
        "idade": Math.floor(Math.random() * (70 - 18 + 1)) + 18,
        "nota": Math.floor(Math.random() * (10 - 0 + 1)) + 0
    };
    pessoas.push(pessoa);
};

router.post("/ex21", (req, res) => {
  let respostas10 = 0;
  let somaIdades = 0;
  let respostas5ouMenos = 0;
  let pessoaMaisVelha = pessoas[0];

  for(let pessoa of pessoas) {
      somaIdades += pessoa.idade;
      if(pessoa.nota === 10) {
          respostas10++;
      }
      if(pessoa.nota <= 5) {
          respostas5ouMenos++;
      }
      if(pessoa.idade > pessoaMaisVelha.idade) {
          pessoaMaisVelha = pessoa;
      }
  }

  let mediaIdade = somaIdades / pessoas.length;
  let percentagem5ouMenos = (respostas5ouMenos / pessoas.length) * 100;

  res.json({
      "Quantidade de respostas 10": respostas10,
      "Média de idade": mediaIdade,
      "Percentagem de respostas 5 ou menos": percentagem5ouMenos,
      "Nome da pessoa mais velha": pessoaMaisVelha.nome
  });
 
});

router.post("/ex22", (req, res) => {
  const produtos  = req.body;
  let maiorPreco = produtos[0].preco;
  let somaPrecos = 0;
  
  for (let i = 0; i < produtos.length; i++) {
      const preco = produtos[i].preco;
      if (preco > maiorPreco) maiorPreco = preco;
      somaPrecos += preco;
  }
  
  const mediaPrecos = somaPrecos / produtos.length;   
   res.json({maiorPreco, mediaPrecos});
});

module.exports = router;
