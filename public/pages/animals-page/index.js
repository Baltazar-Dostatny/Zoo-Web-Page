fetch("/banco-de-dados-animais")
.then(response => {
    if(!response.ok) {
        throw new Error("Erro na solicitação");
    }
    return response.json();
})
.then(data => {

    for(let index = 0; index <= data.length-1; index++) {
        const nomeMaiusculo = data[index].nome.charAt(0).toUpperCase()+data[index].nome.slice(1, data[index].nome.length);
        // console.log(nomeMaiusculo);

        document.getElementById("animals-ul").innerHTML += 
            `<li>
                <a href="/animais-do-zoo/info?nome=${data[index].nome}">
                    <img src="../pictures/${data[index].nome}.jpg">
                    <div class="animals-texto">
                    <p>${nomeMaiusculo}</p>
                    </div>
                </a>
            </li>`       
    };
})
.catch(error => {
    console.error("Erro:", error);
});

// <p>${data[index].nome}</p>
// <p>Tipo: ${data[index].tipo}</p>