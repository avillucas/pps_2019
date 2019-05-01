import { Time } from '@angular/common';

export interface FotoI {
    id?: string;
    path: string;
    owner: string;
    creado: Time;
    buena: boolean;
}
