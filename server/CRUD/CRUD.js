import {mostraTodosOsAnimais, mostraAnimaisPorNome} from "../mongoDB/CRUD-functions.js";
import {app, diretorioAtual} from "../server.js";
import path from "path";

app.get("/banco-de-dados-animais", async (req, res) => {
    const TodosOsAnimais = await mostraTodosOsAnimais();
    res.status(200).send(TodosOsAnimais);
});

app.get("/banco-de-dados-animais:nome", async (req, res) => {
    const animal = await req.params;
    res.status(200).send(await mostraAnimaisPorNome(animal.nome));
});

app.get("/", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/home-page/home.html")
    res.status(200).sendFile(diretorio);
})

app.get("/sobre", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/sobre-page/sobre.html")
    res.status(200).sendFile(diretorio);
})

app.get("/contato", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/contatos-page/contatos.html")
    res.status(200).sendFile(diretorio);
})

app.get("/ingressos", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/ingressos-page/ingressos.html")
    res.status(200).sendFile(diretorio);
})

app.get("/animais-do-zoo", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/animals-page/animals.html")
    res.status(200).sendFile(diretorio);
})

app.get("/animais-do-zoo/info/", async (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/animals-info-page/index.html");
    res.status(200).sendFile(diretorio);
})

app.get("/comprar-ingressos", (req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/buy-ingresso-page/index.html");
    res.status(200).sendFile(diretorio);
})

app.use((req, res) => {
    const diretorio = path.join(diretorioAtual, "../../public", "/pages/404-page/index.html");
    res.status(404).sendFile(diretorio);
})
