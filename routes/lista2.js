const express = require("express");
const router = express.Router();

router.post("/ex1", function (req, res) {
  const { qtdMax, qtdMin } = req.body;

  let estoquemedio = (parseFloat(qtdMax) + parseFloat(qtdMin)) / 2;

  let mensagem =
    estoquemedio > 0
      ? `ESTOQUE MÉDIO: ${estoquemedio}`
      : `NÃO TEM ESTOQUE MÉDIO`;

  res.json({ mensagem });
});

router.post("/ex2", function (req, res) {
  const { nome, horastrabalhadas, valorhora, filhos } = req.body;

  //res.json(req.body)

  const salarioBruto = Number(horastrabalhadas) * Number(valorhora);
  const bonificacaoFilhos = 0.03 * Number(salarioBruto) * Number(filhos);
  const salarioFinal = salarioBruto + bonificacaoFilhos;

  res.json({ salarioBruto, bonificacaoFilhos, salarioFinal });
});

router.post("/ex3", function (req, res) {
  const { dia, mes, ano } = req.body;

  let idadeemdias = Number(dia) + (Number(mes) * 30 + Number(ano) * 365);
  let mensagem = `A Sua idade Em dias é ${idadeemdias}`;
  res.json({ mensagem });
});

router.post("/ex4", function (req, res) {
  const { dias } = req.body;
  let anos = Math.floor(dias / 365);
  let meses = Math.floor((dias % 365) / 30);
  let diasrestantes = dias % 30;
  let mensagem = `${diasrestantes}/${meses}/${anos}`;
  res.json({ mensagem });
});

router.post("/ex5", function (req, res) {
  const { n1, n2, n3 } = req.body;
  let mediaponderada = (n1 * 2 + n2 + 3 + n3 * 5) / n1 + n2 + n3;
  let mensagem = `A média ponderada é ${mediaponderada}`;
  res.json({ mensagem });
});

router.post("/ex6", function (req, res) {
  
  const { tempoemsegundos } = req.body;
  const horas = Math.floor(tempoemsegundos / 3600);
  const minutos = Math.floor((tempoemsegundos % 3600) / 60);
  const segundos = tempoemsegundos % 60;
  res.json({ horas, minutos, segundos });

  
});

router.post('/ex7', function(req, res){
  const {nome, salarioFixo, totalVendas, percComissao} = req.body;
  const comissao = totalVendas * (percComissao / 100);
  const salarioTotal = salarioFixo + comissao;
  let mensagem = `O salário do empregado ${nome} e de R$${salarioTotal}`
  res.json({nome,salarioTotal});
})

router.post('/ex8', function(req, res){

  const {nome,distancia, tempo} = req.body;
  const velocidadeMedia = distancia / tempo;
  let mensagem =`A velocidade média do ${nome}; foi ${velocidadeMedia} km/h.`
  res.json({mensagem});
})

router.post('/ex9', function(req, res){
  const {salario} = req.body;
  if (salario > 1000){
    res.json(`Funcionário não tem direito ao aumento`);
  } else{
  const salarioupgrade = salario + (salario * 30 / 100);
  res.json({salarioupgrade});
};
})


module.exports = router;
