
import { Time } from '@angular/common';
import {formatDate } from '@angular/common';

export class Foto {

    private path: string;
    private owner: string;
    private creado: Date;
    private buena: boolean;

    constructor(path: string, owner: string,  buena: boolean) {
        this.path = path;
        this.owner = owner;
        const  now = new Date();
        this.creado = now;
        this.buena = buena;
    }
}
