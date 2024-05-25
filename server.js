const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

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

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
