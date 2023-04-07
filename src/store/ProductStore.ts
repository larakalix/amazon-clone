import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { Product } from "@/types/product";

type ProductState = {
    products: Product[];
};

export const useSpotifyStore = create<ProductState>()(
    devtools(
        persist(
            (set, get) => ({
                products: [],
            }),
            {
                name: "product-storage",
            }
        )
    )
);
