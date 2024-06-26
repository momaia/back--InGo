import { Schema } from "mongoose";

const PropostaSchema = new Schema({
    numero: Number,
    status: String,
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

export default model('Proposta', PropostaSchema);