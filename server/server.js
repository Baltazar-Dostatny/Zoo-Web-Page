import express from "express";
import url from "url"
import path from "path";
import conectaMongo from "./mongoDB/dbConnect.js";

const diretorioAtual = url.fileURLToPath(import.meta.url);
const diretorioPublic = path.join(diretorioAtual, "../..", "/public");


const app = express();
const porta = 3000;

conectaMongo();

app.use(express.static(diretorioPublic));

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});

export {app, diretorioAtual};
