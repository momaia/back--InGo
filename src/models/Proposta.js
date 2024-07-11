import { Schema, model } from "mongoose";

const PropostaSchema = new Schema({
    status: String,
    data: String,
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        require: true,
    },
});

export default model("Proposta", PropostaSchema);
