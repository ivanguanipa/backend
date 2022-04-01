import { Usuario } from '../../modelo/usuario';

export abstract class RepositorioUsuario {
  abstract existeNombreUsuario(nombre: string): Promise<boolean>;
  abstract guardar(usuario: Usuario);
}
