export class Product {
    id: number;
    category: string;
    size: string;
    price: number;
    title: string;
    artDescription: string;
    artDating: string;
    artId: string;
    artist: string;
    artistBirthDate: Date;
    artistDeathDate: Date;
    artistNationality: string;

    constructor() {
        this.id = 0;
        this.category = '';
        this.size = '';
        this.price = 0;
        this.title = '';
        this.artDescription = '';
        this.artDating = '';
        this.artId = '';
        this.artist = '';
        this.artistBirthDate = new Date();
        this.artistDeathDate = new Date();
        this.artistNationality = '';
    }
}