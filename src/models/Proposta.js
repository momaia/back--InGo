import { Schema, model} from "mongoose";

const PropostaSchema = new Schema({
    id: String,
    numero: String,
    status: String,
    tipo: String,
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

export default model('Proposta', PropostaSchema);