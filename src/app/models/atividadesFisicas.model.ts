import { Usuario } from "./usuario.model";

export interface AtividadeFisica {
  AtividadeId: number;
  UsuarioId: number;
  Nome: string;
  DuracaoMinutos: number;
  Data: string;
  Usuario: Usuario;
}
