import { ImageType } from "../Interfaces/Image_type";

export class Preview implements ImageType {
    src: string;
    width: number;
    alt: string;

    constructor(src: string, alt: string = "image", width: number = 40){
        this.src = src;
        this.width = width;
        this.alt = alt;
    }

    display() : string {
        return `${this.src} ${this.width}px ${this.alt}`
    }

    imageCreate() : string {
        return `<img src="${this.src}" alt="${this.alt}" width="${this.width}" />`
    }

    previewImage() : string {
        return `<img src="${this.src}" alt="${this.alt}" width="40" />`
    }

}