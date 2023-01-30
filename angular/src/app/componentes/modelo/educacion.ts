export class Educacion {
    id?: number;
    tituloEstudio: string;
    certificado: string;

    constructor(tituloEstudio:string, certificado:string){
        this.tituloEstudio = tituloEstudio;
        this.certificado = certificado
    }

}
