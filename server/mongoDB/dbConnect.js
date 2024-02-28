import mongoose from "mongoose";

function conectaMongo() {
    try {
        mongoose.connect("mongodb+srv://readget:get123@alura.5nrl9rn.mongodb.net/?retryWrites=true&w=majority")

        console.log("MongoDb Conectado com sucesso!");
    } catch(error) {
        throw new Error(`Erro: ${error}`);
    };
};

export default conectaMongo;
