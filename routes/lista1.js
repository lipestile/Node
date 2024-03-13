const express = require("express");
const router = express.Router();
// Require controller modules.

router.post("/ex1", function (req, res) {
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n1);
  const n3 = Number(req.body.n1);
  const n4 = Number(req.body.n1);

  const media = (n1 + n2 + n3 + n4) / 4;

  const mensagem = media >= 7 ? "Aprovado" : "Reprovado";

  res.json({ media, mensagem });
});

router.post("/ex2", function (req, res) {
  const total = Number(req.body.total);
  const brancos = Number(req.body.brancos);
  const nulos = Number(req.body.nulos);
  const validos = Number(req.body.validos);

  /*
      forma diferente da parte de cima
      const {total ,branco ,nulos ,validos} = req.body  
      const requisicoes = req.body
    
      */

  const soma = brancos + nulos + validos;

  let retorno = {};

  if (soma > total) {
    retorno = {
      codigo: "Soma_eleitora",
      mensagem: `Valores incorretos!.`,
    };

    res.status(400).json(retorno);
  } else {
    const percentualBranco = (brancos / total) * 100;
    const percentualNulo = (nulos / total) * 100;
    const percentualValidos = (validos / total) * 100;

    retorno = {
      percbrancos: percentualBranco,
      perfalanculados: percentualNulo,
      perfavorecidos: percentualValidos,
    };

    console.log("Brancos:  " + percentualBranco);
    console.log("Nulos:   " + percentualNulo);
    console.log("Validos: " + percentualValidos);
  }

  res.status(200).send(retorno);

  res.json({ resposta: "Lista 1 --> ex1" });
});

router.post("/ex3", function (req, res) {
  const salario = Number(req.body.salario);
  const valor = salario + salario * 0.035;
  const rejuste = valor - salario;
  let mensagem = `O reajuste é de ${rejuste}, o valor sai de ${salario} para ${valor}.`;
  res.json({ mensagem });
});

router.post("/ex4", function (req, res) {
  let valor = Number(req.body.valor);
  let valortotal = valor + valor * 0.28 + valor * 0.45;
  let mensagem = `O valor de veiculo mais impostos e custos de destribuição: R$${valortotal}`;

  res.json({ mensagem });
});

router.post("/ex5", function (req, res) {
  const precoProducao = parseFloat(req.body.precoProducao);
  const taxaDistribuidor = parseFloat(req.body.taxaDistribuidor);
  const taxas = parseFloat(req.body.taxas);
  const despesaDistribuidor = precoProducao * (taxaDistribuidor / 100);
  const precoFinal = precoProducao + despesaDistribuidor + taxas;
  const mensagem = `O preço final do veículo é: ${precoFinal}`;
  res.json(mensagem);
});

router.post("/ex6", function (req, res) {
  const numerodecarrosporelevendido = Number(
    req.body.numerodecarrosporelevendido
  );
  const valortotaldasvendas = Number(req.body.valortotaldasvendas);
  const salariofixoporemes = Number(req.body.salariofixoporemes);
  const valorporcarrovendido = Number(req.body.valorporcarrovendido);
  const somatotal =
    valorporcarrovendido +
    valortotaldasvendas * 0.05 +
    numerodecarrosporelevendido;
  let mensagem = `O salario total e ${somatotal}`;
  console.log(mensagem);
  res.json(mensagem);
});

router.post("/ex7", function (req, res) {
  const n1 = Number(req.body.n1);
  const n2 = Number(req.body.n2);
  const pesoNota1 = 4;
  const pesoNota2 = 6;
  const mediaFinal =
    (n1 * pesoNota1 + n2 * pesoNota2) / (pesoNota1 + pesoNota2);
  let mensagem = `A media final é: ${mediaFinal}`;

  res.json(mensagem);
});

router.post("/ex8", function (req, res) {
  
  const raio = parseFloat(req.body.raio);
  const altura = parseFloat(req.body.altura);
  const pi = 3.1416;
  const volume = pi * Math.pow(raio, 2) * altura;
  res.json(`O volume é ${volume} litros`);

});

router.post("/ex9", function (req, res) {

  const n1 = parseFloat(req.body.n1);
  const n2 = parseFloat(req.body.n2);
  const soma = n1 + n2;
  const resultado = soma * n1;
  let mensagem = (`O resultado: ${resultado}`);
  res.json(mensagem);


});

module.exports = router;
