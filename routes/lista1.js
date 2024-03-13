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

  res.json({media, mensagem})
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


module.exports = router
