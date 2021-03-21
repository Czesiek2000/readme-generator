export interface Image {
    src: string;
    width: number;
    alt: string;
    display() : string;
    imageCreate() : string;
}