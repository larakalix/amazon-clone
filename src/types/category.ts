export type Category = {
    id: number;
    name: string;
    subCategories: Category[];
};
