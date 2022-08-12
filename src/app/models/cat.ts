import { image } from "./image";

export class Cat {
    id!:string;
    name!: string;
    image!:image;

    constructor(name:string, image:image, id:string ){
       this.name = name;
       this.image = image;
       this.id = id
    }
}
