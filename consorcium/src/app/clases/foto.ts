
import { FotoI } from '../modelos/foto.interface';

export class Foto implements FotoI {

    id?: string;
    path: string;
    owner: string;
    creado: any = null;
    buena: boolean;

    constructor(path: string, owner: string, buena: boolean) {
        this.path = path;
        this.owner = owner;
        this.buena = buena;
    }
}
