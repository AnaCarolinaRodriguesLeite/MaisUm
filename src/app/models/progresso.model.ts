import { Usuario } from "./usuario.model";

export interface Progresso {
  ProgressoId: number;
  UsuarioId: number;
  Peso: number;
  Data: string;
  Observacoes: string;
  Usuario: Usuario;
}