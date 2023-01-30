export class Proyecto {
    id?: number;
    titulo: string;
    img: string;
    detalle: string;
    url: string;

    constructor(id: number, titulo: string, img: string, detalle: string, url: string) {
        this.id = id;
        this.titulo = titulo;
        this.img = img;
        this.detalle = detalle;
        this.url = url;
    }
}
