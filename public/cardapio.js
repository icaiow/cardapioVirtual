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

let order = [];

function addToOrder(item, price) {
    const quantity = quantities[item] || 0;
    if (quantity > 0) {
        const product = item.replace(/-/g, ' ');
        const existingItem = order.find(orderItem => orderItem.produto === product);

        if (existingItem) {
            existingItem.quantidade += quantity;
        } else {
            order.push({ produto: product, quantidade: quantity, preco: price });
        }

        alert(`${quantity} ${product} adicionado(s) ao pedido.`);
    } else {
        alert('A quantidade deve ser maior que zero.');
    }
}

function finalizeOrder() {
    const name = prompt("Por favor, insira seu nome:");
    if (name && order.length > 0) {
        const total = order.reduce((sum, item) => sum + item.quantidade * item.preco, 0);

        const orderData = {
            nome: name,
            itens: order.map(item => ({ produto: item.produto, quantidade: item.quantidade })),
            total: total
        };

        fetch('http://localhost:5000/api/pedidos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(data => {
                alert('Pedido enviado com sucesso!');
                order = []; 
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Houve um erro ao enviar seu pedido.');
            });
    } else {
        alert('Por favor, insira seu nome e adicione itens ao pedido.');
    }
}
