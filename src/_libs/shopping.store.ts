import { create } from "zustand";
import { Card } from "./card.type";

interface ShoppingListStore {
    list: Card[],
    selected: number[],
    addList: (item: Card) => void;
    removeList: (id: number) => void;
    selecteAll: () => void;
    selecteList: (id: number) => void;
    removeSelectedList: () => void;
}


export const useShoppingList = create<ShoppingListStore>((set, get) => ({
    list: [],
    selected: [],
    addList: (item) => set((state) => {
        if (state.list.length === 20) { alert('담은 물건이 20개 이상입니다.'); return state; }
        if (state.list.find(el => el.id === item.id)) { alert('이미 추가된 카드 입니다.'); return state; }

        alert('장바구니 추가 완료')
        return { list: [item, ...state.list] }
    }),
    removeList: (id) => set((state) => ({ list: state.list.filter(item => item.id !== id) })),
    selecteAll: () => set((state) => {
        if (state.selected.length === state.list.length) return { selected: [] }
        return { selected: [...state.list.map(item => item.id)] }
    }),
    selecteList: (id) => set((state) => {
        if (state.selected.includes(id)) return { selected: state.selected.filter(selectedId => selectedId !== id) }
        return {
            selected: [id, ...state.selected]
        }
    }),
    selectedList: () => {
        const { list, selected } = get();
        return list.find(el => selected.includes(el.id)) || null;
    },
    removeSelectedList: () => {
        const { selected, removeList } = get();
        selected.map((id) => removeList(id))
    }
}))