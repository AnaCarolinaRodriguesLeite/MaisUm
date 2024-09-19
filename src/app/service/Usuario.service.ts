import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../endpoints';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_ENDPOINTS.Usuarios.getUsuarios);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(API_ENDPOINTS.Usuarios.addUsuario, usuario);
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(API_ENDPOINTS.Usuarios.updateUsuario(usuario.UsuarioId), usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.Usuarios.deleteUsuario(id));
  }

    // Método para login
    login(email: string, senha: string): Observable<Usuario> {
      return this.http.post<Usuario>(API_ENDPOINTS.Usuarios.addUsuario, { email, senha });
    }
  
    // Método para cadastro
    cadastrar(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(API_ENDPOINTS.Usuarios.addUsuario, usuario);
    }
}
