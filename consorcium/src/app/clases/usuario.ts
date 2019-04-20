export class Usuario {
    public id: number;
    public email: string;
    public password: string;
    public perfil: string;
    public sexo: string;

    constructor(id: number, email: string, password: string, perfil: string, sexo: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.perfil = perfil;
        this.sexo = sexo;
    }
}
