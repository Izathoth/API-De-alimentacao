const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dados dos alimentos
const alimentos = [
  { nome: "feijão preto", calorias: 127, proteina: "8.7g", carboidratos: "22g", gorduras: "0.5g" },
  { nome: "arroz", calorias: 130, proteina: "2.7g", carboidratos: "28g", gorduras: "0.3g" },
  { nome: "farinha de mandioca", calorias: 338, proteina: "1.8g", carboidratos: "82g", gorduras: "0.4g" },
  { nome: "coxinha", calorias: 293, proteina: "10g", carboidratos: "25g", gorduras: "15g" },
  { nome: "pão de queijo", calorias: 390, proteina: "11g", carboidratos: "32g", gorduras: "22g" },
  { nome: "mandioca", calorias: 160, proteina: "1.4g", carboidratos: "38g", gorduras: "0.3g" },
  { nome: "pastel", calorias: 286, proteina: "5.5g", carboidratos: "27g", gorduras: "17g" },
  { nome: "bacalhau", calorias: 105, proteina: "23g", carboidratos: "0g", gorduras: "0.8g" },
  { nome: "açaí", calorias: 70, proteina: "1.2g", carboidratos: "5g", gorduras: "4.2g" },
  { nome: "tapioca", calorias: 173, proteina: "0g", carboidratos: "43g", gorduras: "0g" },
  { nome: "batata-doce", calorias: 86, proteina: "1.6g", carboidratos: "20g", gorduras: "0.1g" },
  { nome: "churrasco", calorias: 250, proteina: "23g", carboidratos: "0g", gorduras: "17g" },
  { nome: "farofa", calorias: 120, proteina: "2g", carboidratos: "20g", gorduras: "3g" },
  { nome: "brigadeiro", calorias: 110, proteina: "1g", carboidratos: "15g", gorduras: "5g" },
  { nome: "moqueca", calorias: 190, proteina: "17g", carboidratos: "6g", gorduras: "11g" },
  { nome: "vatapá", calorias: 230, proteina: "6g", carboidratos: "15g", gorduras: "17g" },
  { nome: "acarajé", calorias: 290, proteina: "6g", carboidratos: "15g", gorduras: "25g" },
  { nome: "cuscuz", calorias: 112, proteina: "3g", carboidratos: "24g", gorduras: "0.6g" },
  { nome: "pudim", calorias: 260, proteina: "5g", carboidratos: "45g", gorduras: "7g" },
  { nome: "canjica", calorias: 150, proteina: "3g", carboidratos: "30g", gorduras: "2g" },
  { nome: "curau", calorias: 180, proteina: "3g", carboidratos: "30g", gorduras: "5g" },
  { nome: "feijoada", calorias: 350, proteina: "23g", carboidratos: "29g", gorduras: "15g" },
  { nome: "galinhada", calorias: 200, proteina: "16g", carboidratos: "25g", gorduras: "5g" },
  { nome: "pamonha", calorias: 250, proteina: "5g", carboidratos: "45g", gorduras: "5g" },
  { nome: "quindim", calorias: 320, proteina: "6g", carboidratos: "50g", gorduras: "10g" },
  { nome: "escondidinho", calorias: 230, proteina: "16g", carboidratos: "15g", gorduras: "12g" },
  { nome: "mousse de maracujá", calorias: 230, proteina: "3g", carboidratos: "30g", gorduras: "10g" },
  { nome: "lasanha", calorias: 320, proteina: "16g", carboidratos: "35g", gorduras: "15g" },
  { nome: "bolo de cenoura", calorias: 180, proteina: "3g", carboidratos: "30g", gorduras: "7g" }
];

// Endpoint para obter informações sobre um alimento
app.get('/api/food/:nome', (req, res) => {
  const { nome } = req.params;
  const alimento = alimentos.find(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (alimento) {
    res.json(alimento);
  } else {
    res.status(404).json({ mensagem: 'Alimento não encontrado' });
  }
});

// Endpoint para adicionar um novo alimento
app.post('/api/food', (req, res) => {
  const novoAlimento = req.body;
  alimentos.push(novoAlimento);
  res.json({ mensagem: 'Alimento adicionado com sucesso.' });
});

// Endpoint para atualizar informações de um alimento
app.put('/api/food/:nome', (req, res) => {
  const { nome } = req.params;
  const index = alimentos.findIndex(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (index !== -1) {
    alimentos[index] = { ...alimentos[index], ...req.body };
    res.json({ mensagem: 'Alimento atualizado com sucesso.' });
  } else {
    res.status(404).json({ mensagem: 'Alimento não encontrado' });
  }
});

// Endpoint para excluir um alimento
app.delete('/api/food/:nome', (req, res) => {
  const { nome } = req.params;
  const index = alimentos.findIndex(a => a.nome.toLowerCase() === nome.toLowerCase());
  if (index !== -1) {
    alimentos.splice(index, 1);
    res.json({ mensagem: 'Alimento removido com sucesso.' });
  } else {
    res.status(404).json({ mensagem: 'Alimento não encontrado' });
  }
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
