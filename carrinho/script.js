let carrinho = [];
let total = 0;

function addCarrinho(produto, valor) {
    let fim = false;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].produto === produto) {
            carrinho[i].qtd++;
            fim = true;
            break;
        }
    }
    if(!fim) {
        carrinho.push({ produto, valor, qtd: 1 });
    }
    atualizaCarrinho();
}
function atualizaCarrinho() {
    const cartItens = document.getElementById('carrinho-itens');
    cartItens.innerHTML = '';
    total = 0;
    carrinho.forEach((item, index) => {
        total += item.valor * item.qtd;
        cartItens.innerHTML += `

            <div class="carrinho-itens">
                <span>${item.produto} (X ${item.qtd}) </span>
                <span>${item.valor * item.qtd} </span>
                <button onClick="removeItemCarrinho(${index})">Remover Compra</button>
            </div>

        
        
        `;
    });
    document.getElementById('carrinho-total').innerText = total;
}

function removeItemCarrinho(index){
    total -= carrinho[index].valor * carrinho[index].qtd;
    carrinho.splice(index,1);
    atualizaCarrinho();
}

function fecharPedido(){
    if(carrinho.length === 0){
        alert('Seu carrrinho está vazio');
        return;
    }
    alert(`Compra Finalizada! Total: R$ ${total}`);
    carrinho = [];
    atualizaCarrinho();
}