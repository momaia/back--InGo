import { Schema, model } from "mongoose";

const ProdutoSchema = new Schema({
  tipo: String,
  codigo: Number,
  seguro: Boolean,
});

export default model("Produto", ProdutoSchema);
