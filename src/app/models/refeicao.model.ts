import { Usuario } from "./usuario.model";

export interface Alimentacao {
  alimentacaoId: number;
  usuarioId: number;
  tipo: string;
  descricao: string;
  calorias: number;
  data: string;
  usuario?: Usuario;
}