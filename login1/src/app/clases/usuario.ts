export class Usuario {
    private correo: String;
    private secreto: String;

    get Correo(): String {
        return this.correo;
    }

    set Correo(correo: String) {
        this.correo = correo;
    }

    get Secreto(): String {
        return this.secreto;
    }

    set Secreto(secreto: String) {
        this.secreto = secreto;
    }
}
