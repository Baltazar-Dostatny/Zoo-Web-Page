import mongoose from "mongoose";

const animaisSchema = new mongoose.Schema({
    nome: String,
    tipo: String,
    texto: String,
});

const animais = mongoose.model("animais", animaisSchema);

export default animais;