const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pedidos');


// Definição do esquema e modelo
const pedidoSchema = new mongoose.Schema({
    produto: String,
    quantidade: Number
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

// Middleware para processar JSON
app.use(bodyParser.json());
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/cardapio.html');
});

// Rota para adicionar pedidos
app.post('/adicionarPedido', async (req, res) => {
    const { produto, quantidade } = req.body;

    const novoPedido = new Pedido({
        produto,
        quantidade
    });

    try {
        await novoPedido.save();
        res.status(200).send('Pedido adicionado com sucesso');
    } catch (err) {
        res.status(500).send('Erro ao adicionar pedido');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
