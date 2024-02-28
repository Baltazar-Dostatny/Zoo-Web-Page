fetch("/banco-de-dados-animais").then(response => {
    if(!response.ok) {
        throw new Error("Erro na solicitação");
    }
    return response.json();
}).then(data => {
    const url = new URLSearchParams(window.location.search);
    const nomeAnimal = url.get("nome");
    const indexAnimal = data.findIndex(({nome}) => nome === nomeAnimal);

    const informacoes = data[indexAnimal].texto.split(".");

    document.querySelector("main").innerHTML=`<ul class="animals-info">
                <li><img src="../../pictures/${nomeAnimal}.jpg"></li>
                <li><p class="nome-animal">${nomeAnimal}</p></li>
                <div class="caracteristica">
                    <p>${informacoes[0]}</p>
                    <p>${informacoes[1]}</p>
                    <p>${informacoes[2]}</p>
                    <p>${informacoes[3]}</p>
                </div>
            </ul>`

}).catch(error => {
    console.error("erro", error);
});