export class Persona {
    id?:number;
    nombre: string;
    foto: string;
    titulo:string;
    logo: string;
    portada: string;
    presentacion: string;
    linkedin: string;
    github: string;
    codepen: string;

    constructor(nombre:string, foto:string, titulo:string, logo:string, portada:string, linkedin:string, github:string, codepen:string) {
        this.nombre = nombre;
        this.foto = foto;
        this.titulo = titulo;
        this.logo = logo;
        this.portada = portada;
        this.presentacion = portada;
        this.linkedin = linkedin;
        this.github = github;
        this.codepen = codepen;
    }
}
