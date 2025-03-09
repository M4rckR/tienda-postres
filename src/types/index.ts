

export type DessertCart = {
    name: string;
    price: number;
    quantity: number;
    image: imagesUrlArray;
    id: number;
    category: string;
}


// Tipo del postre

export type Dessert = {
    id: number;
    image: imagesUrlArray;
    name: string;
    category: string;
    price: number;
}

type imagesUrlArray = {
    thumbnail: string;
    mobile:string;
    tablet :string;
    desktop:string;
}