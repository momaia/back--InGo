import { Schema, model } from "mongoose";

const ClienteSchema = new Schema({
    nome: String,
    data_nascimento: String,
    documento: Number,
    empregador: String,
    telefone: String,
});

export default model("Cliente", ClienteSchema);
