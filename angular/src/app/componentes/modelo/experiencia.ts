export class Experiencia {
    id?: number;
    descripcionPuesto: string;
    logoEmpresa: string;

    constructor(descripcionPuesto: string, logoEmpresa: string) {
        this.descripcionPuesto = descripcionPuesto;
        this.logoEmpresa = logoEmpresa;
    }
}
