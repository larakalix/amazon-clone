import { Category } from "./category";

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category[];
};
