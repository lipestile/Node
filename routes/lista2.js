const express = require("express");
const router = express.Router()

router.post('/ex2', function(req, res){
    
    const{nome, horastrabalhadas, valorhora, filhos} = req.body;
     
    //res.json(req.body)
    
    const salarioBruto =  Number(horastrabalhadas) * Number(valorhora) ;
    const bonificacaoFilhos = 0.03 * Number(salarioBruto) * Number(filhos);
    const salarioFinal = salarioBruto + bonificacaoFilhos
  

    res.json({salarioBruto, bonificacaoFilhos, salarioFinal})
  })

module.exports=router;