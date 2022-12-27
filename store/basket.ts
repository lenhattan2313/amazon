import create from "zustand";

export type ItemData = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  hasPrime: boolean;
  rating: number;
};
type Store = {
  basketList: ItemData[];
  addToBasket: (item: ItemData) => void;
  removeFromBasket: (id: string) => void;
};

const useBasketStore = create<Store>((set) => ({
  basketList: [],
  addToBasket(item: ItemData) {
    set((state) => ({
      ...state,
      basketList: [...state.basketList, item],
    }));
  },
  removeFromBasket(id: string) {
    set((state) => ({
      ...state,
      basketList: state.basketList.filter((basket) => basket.id !== id),
    }));
  },
}));

export default useBasketStore;
