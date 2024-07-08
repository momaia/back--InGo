import { Schema, model } from "mongoose";

const PropostaSchema = new Schema(
  {
    id: String,
    arquivo: String,
    numero: String,
    status: String,
    tipo: String,
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

PropostaSchema.virtual("url_imagem").get(function () {
  return `http://localhost:3333/files/${this.arquivo}`;
});

export default model("Proposta", PropostaSchema);