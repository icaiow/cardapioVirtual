const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const produto = urlParams.get('produto');

const quantidade = urlParams.get('quantidade');



// Exibir o produto e a quantidade na página
document.getElementById('nome-produto').innerText = produto;
document.getElementById('quantidade').innerText = quantidade;