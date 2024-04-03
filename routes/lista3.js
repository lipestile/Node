const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const salarioDofuncionario = req.body.salarioDofuncionario;

  let mensagem =
    salarioDofuncionario <= 2000
      ? `O reajuste é de 50% seu salario vai de ${salarioDofuncionario} para ${
          salarioDofuncionario * 0.5 + salarioDofuncionario
        }`
      : `O reajuste é de 30% seu salario vai de ${salarioDofuncionario} para ${
          salarioDofuncionario * 0.3 + salarioDofuncionario
        }`;
  res.json(mensagem);
});

router.post("/ex2", function (req, res) {
  const { n1, n2, n3 } = req.body;
  let array = [n1, n2, n3];
  let listaD = array.sort((a, b) => b - a);
  res.json(listaD[0]);
});

router.post("/ex3", function (req, res) {
  const { nclientes, nPizzas, nRecheios, nChoop } = req.body;

  let valorTotalpizza = Math.floor(nPizzas * 17.0 + nRecheios * 1.5);
  let valorTotalchoop = Math.floor(nChoop * 4.8);
  let comissao = Math.floor((valorTotalchoop + valorTotalpizza) * 0.1);
  let total = Math.floor(valorTotalpizza + comissao + valorTotalchoop);

  let mensagem = `Pizza + Recheios: ${valorTotalpizza}  Choop: ${valorTotalchoop} Comissão: ${comissao} Total: ${total} A divisão igualitaria entre os clientes fica de ${
    total / nclientes
  }`;

  res.json(mensagem);
});

router.post("/ex4", function (req, res) {
  // const valorSalariominimo = parseFloat(req.body.valorSalariominimo)
  // const numeroDeHorasTrabalhadas = parseFloat(req.body.numeroDeHorasTrabalhadas)
  // const numeroDePendentes = parseFloat(req.body.numeroDePendentes)
  // const quantidadeDeHorasExrtras = parseFloat(req.body.quantidadeDeHorasExrtras)

  const {
    valorSalariominimo,
    numeroDeHorasTrabalhadas,
    numeroDePendentes,
    quantidadeDeHorasExrtras,
  } = req.body;

  const valorhoratrabalhada = valorSalariominimo * 0.2;
  const salariomes = valorhoratrabalhada * numeroDeHorasTrabalhadas;
  const valordepedente = numeroDePendentes * 32;
  const valorextra = valorhoratrabalhada * 1.5 * quantidadeDeHorasExrtras;
  const salariobruto = salariomes + valordepedente + valorextra;

  let imposto = 0;

  if (salariobruto > 2000) {
    imposto = salariobruto > 5000 ? salariobruto * 0.2 : salariobruto * 0.1;
  }

  const salarioliquido = salariobruto - imposto;
  const gratificacoes = salarioliquido < 3500 ? 1000 : 500;
  const salarioareceber = salarioliquido + gratificacoes;

  res.json({ salariobruto, imposto, gratificacoes, salarioareceber });
});

router.post("/ex5", function (req, res) {

  const { n1, n2, n3, me } = req.body;

  let media = Math.floor((n1 + n2 * 2 + n3 * 3 + me)/7)

  let conceito = undefined

  if( media >= 9){
    conceito = 'A'
  }else if(media >= 7.5 && media < 9.0){
    conceito = 'B'
  }else if(media >= 6.0 && media < 7.5){
    conceito = 'C'
  }else if( media >= 4.0 && media < 6.0){
    conceito = 'D'
  }else{
    conceito = 'E'
  };

  res.json({media, conceito});
});

router.post('/ex6', function(req, res){
    const {sexo, altura} = req.body

    let pesoideal = sexo == "M" ?
    `Peso ideal de Homem: ${(72.7 * altura) - 58}` :
    `Peso ideal da Mulher: ${(62.1 * altura) - 44.7}`
    res.json({pesoideal})
});

router.post('/ex7', function(req, res){
  const { n1, n2, n3} = req.body;
  let array = [n1, n2, n3];
  let listaD = array.sort((a, b) => b - a);
  let a = listaD[0]
  let b = listaD[1]

    res.json(`${a + b}`)
});

router.post('/ex8', function(req, res){

  const { salario, cdcargo} = req.body

  let salarioupgrade = undefined
  if(cdcargo == 101){
    salarioupgrade = salario * 0.05
  }else if(cdcargo == 102){
    salarioupgrade = salario * 0.075
  }else if(cdcargo == 103){
    salarioupgrade = salario * 0.1
  }else{
    salarioupgrade = salario * 0.15
  }

    res.json(`${salarioupgrade + salario}`)
});




module.exports = router;
