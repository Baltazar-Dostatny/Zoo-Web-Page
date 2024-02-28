const ingressos = [
    {
        nome: "Ingresso-Normal",
        descricao: "Com esse ingresso você tem acesso total as atrações do Zoo assim podendo usufruir de todas as atrações"
    },
    {
        nome: "Ingresso-Familiar",
        descricao: "Com esse ingresso você tem acesso total as atrações do Zoo para até 5 pessoas pagando somente 3 ingressos"
    },
    {
        nome: "Ingresso-Vip",
        descricao: "Com esse ingresso você tem acesso total as trações do Zoo sem a necessidade de esperar em filas"
    }
]

const url = new URLSearchParams(window.location.search)
const nomeIngresso = url.get("opcao");

const indexIngresso = ingressos.findIndex(ing => ing.nome.toLowerCase() == nomeIngresso);

const ingressosDiv = document.querySelector("main");

ingressosDiv.innerHTML+=`
    <ul class="comprar">               
        <h3>${ingressos[indexIngresso].nome.replace("-", " ")}</h3>
        <li>${ingressos[indexIngresso].descricao}</li> 
        <a href="/finalizar-compra">Adquirir Ingresso</a>
    </ul>`