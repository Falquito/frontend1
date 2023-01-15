export class Proyectos {
    id?:number;
    nombreP:string;
    urlP:string;
    descripcionP:string;

    constructor(nombreP:string, descripcionP:string, urlP:string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.urlP = urlP;
    }
}