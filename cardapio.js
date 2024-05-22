function openSection(sectionName) {
  var i;
  var sections = document.getElementsByClassName("section");
  for (i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById(sectionName).style.display = "block";
}


// Função para adicionar um item
function addItem(itemName) {
var quantitySpan = document.getElementById(itemName + '-quantity');
var currentQuantity = parseInt(quantitySpan.textContent);
quantitySpan.textContent = currentQuantity + 1;
}

// Função para remover um item
function removeItem(itemName) {
var quantitySpan = document.getElementById(itemName + '-quantity');
var currentQuantity = parseInt(quantitySpan.textContent);
if (currentQuantity > 0) {
    quantitySpan.textContent = currentQuantity - 1;
}
}

// Função para adicionar ao pedido
function addToOrder(itemName) {
var quantity = parseInt(document.getElementById(itemName + '-quantity').textContent);
if (quantity > 0) {
    var item = {
        name: itemName,
        quantity: quantity
    };
    // Aqui você pode adicionar a lógica para adicionar o item ao pedido
    // Por exemplo, você pode criar um objeto que representa o item e adicioná-lo a uma lista de pedidos
    // Exemplo: orders.push(item);
    alert('Item adicionado ao pedido: ' + itemName + ' - Quantidade: ' + quantity);
    // Após adicionar ao pedido, você pode redefinir a quantidade para 0
    document.getElementById(itemName + '-quantity').textContent = '0';
} else {
    alert('Por favor, selecione a quantidade desejada para ' + itemName);
}


} 
