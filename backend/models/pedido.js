const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  itens: [
    {
      produto: String,
      quantidade: Number
    }
  ],
  total: Number,
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Pedido', PedidoSchema);
