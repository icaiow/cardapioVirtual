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

