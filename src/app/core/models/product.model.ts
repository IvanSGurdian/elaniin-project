export interface Menu {
    data: Product[];
    links: {
        first: string;
        last: string;
        next: string;
        prev: string
    };
    meta: any;
}

export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}