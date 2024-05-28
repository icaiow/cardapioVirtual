const express = require('express');
const connectDB = require('./backend/db');
const pedidoRoutes = require('./backend/routes/pedido')
const app = express();
const port = 5000;

app.use(express.json());

// Conecta-se ao banco de dados
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1); // Encerra o processo com um código de erro
  });

app.use(express.static('public'));
app.use('/api', pedidoRoutes);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/cardapio.html');
});

app.get('/adicionar', (req, res) => {
    const { produto, quantidade } = req.query;
    res.redirect(`/pedido?produto=${encodeURIComponent(produto)}&quantidade=${quantidade}`);
});

app.get('/pedido', (req, res) => {
    const { produto, quantidade } = req.query;
    res.send(`
        <h1>Pedido</h1>
        <p>Produto: ${produto}</p>
        <p>Quantidade: ${quantidade}</p>
        <a href="/">Voltar</a>
    `);
});
