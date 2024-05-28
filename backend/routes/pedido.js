const express = require('express');
const Pedido = require('../models/pedido');
const router = express.Router();

// Criar um novo pedido
router.post('/pedidos', async (req, res) => {
  const { nome, itens, total } = req.body;
  try {
    const novoPedido = new Pedido({ nome, itens, total });
    await novoPedido.save();
    res.status(201).json(novoPedido);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pedido' });
  }
});

// Obter todos os pedidos
router.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter pedidos' });
  }
});

module.exports = router;
