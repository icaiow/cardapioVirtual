function openSection(sectionName) {
    var i;
    var sections = document.getElementsByClassName("section");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(sectionName).style.display = "block";
}


let quantities = {};

function addItem(item) {
    if (!quantities[item]) {
        quantities[item] = 0;
    }
    quantities[item]++;
    document.getElementById(item + '-quantity').innerText = quantities[item];
    const produto = localStorage.getItem('produto');
    localStorage.setItem(item, quantities[item]);
}

function removeItem(item) {
    if (quantities[item] && quantities[item] > 0) {
        quantities[item]--;
        document.getElementById(item + '-quantity').innerText = quantities[item];

    }
}

function addToOrder(item) {
    const quantity = quantities[item] || 0;
    if (quantity > 0) {
        const product = item.replace(/-/g, ' ');

        // Fazer a requisição POST para o servidor
        fetch('/adicionarPedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                produto: product,
                quantidade: quantity
            })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = `/produtos.html?produto=${encodeURIComponent(product)}&quantidade=${quantity}`;
            } else {
                alert('Erro ao adicionar pedido');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao adicionar pedido');
        });
    } else {
        alert('A quantidade deve ser maior que zero.');
    }
}

