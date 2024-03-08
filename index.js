const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.get("/", function (req, res) {
  res.send("Rota Principal");
});
app.get("/hello", function (req, res) {
  res.send("Chegou a resposta");
});

app.post("/lista1/ex1", function (req, res) {

    const total = Number(req.body.total)
    const brancos = Number(req.body.brancos)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)
  
    
    const soma = brancos + nulos + validos

    let  retorno = {}

    if(soma > total){

        retorno ={
            codigo: 'Soma_eleitora',
            mensagem:`Valores incorretos!.`
        }

        res.status(400).json(retorno);

      } else{
          const percentualBranco =  brancos / total * 100;
          const percentualNulo = nulos / total * 100;
          const percentualValidos = validos / total * 100;

          retorno = {
            percbrancos:  percentualBranco,
            perfalanculados: percentualNulo ,
            perfavorecidos: percentualValidos
          }

          console.log("Brancos:  " + percentualBranco);
          console.log("Nulos:   " + percentualNulo);
          console.log("Validos: " + percentualValidos)
      }

      res.status(200).send(retorno);
  
    res.json({resposta: "Lista 1 --> ex1"});
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
