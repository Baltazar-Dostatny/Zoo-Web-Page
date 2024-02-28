import animais from "./models.js";

function mostraTodosOsAnimais() {
    const todos = animais.find();
    return todos;
}

function mostraAnimaisPorNome(nomeAnimal) {
    const animal = animais.find({ nome: nomeAnimal});
    return animal;
}

export {mostraTodosOsAnimais, mostraAnimaisPorNome};
