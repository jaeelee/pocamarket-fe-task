import { create } from "zustand";
import { Card } from "./card.type";

interface ShoppingListStore {
    list: Card[],
    selected: number[],
    addList: (item: Card) => void;
    selecteList: (id: number) => void;
    removeList: (id: number) => void;
}


export const useShoppingList = create<ShoppingListStore>((set, get) => ({
    list: [],
    selected: [],
    addList: (item) => set((state) => {
        if (state.list.length === 20) return state;
        if (state.list.find(el => el.id === item.id)) return state;

        return { list: [item, ...state.list] }
    }),
    selecteList: (id) => set((state) => ({
        selected: [id, ...state.selected]
    })),
    selectedList: () => {
        const { list, selected } = get();
        return list.find(el => selected.includes(el.id)) || null;
    },
    removeList: (id) => set((state) => ({ list: state.list.filter(item => item.id !== id) }))

}))