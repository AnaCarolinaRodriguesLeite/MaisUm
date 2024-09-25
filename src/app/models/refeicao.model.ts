import { Usuario } from "./usuario.model";

export interface Alimentacao {
  AlimentacaoId: number;
  UsuarioId: number;
  Tipo: string;
  Descricao: string;
  Calorias: number;
  Data: string;
  Usuario?: Usuario;
}