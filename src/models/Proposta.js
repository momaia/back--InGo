import { Schema, model } from "mongoose";

const PropostaSchema = new Schema({
  status: String,
  data: String,
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
  },
});

export default model("Proposta", PropostaSchema);
