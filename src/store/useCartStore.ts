import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const secureStorage = {
  getItem: (key: string) => SecureStore.getItemAsync(key),
  setItem: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  removeItem: (key: string) => SecureStore.deleteItemAsync(key),
};

export interface FileItem {
  name: string;
  uri: string;
  type?: string;
}

export interface Product {
  name: string;
  price: string;
  file: FileItem[];
}

interface CartState {
  items: Product[];
  isLoading: boolean;
  addItem: (product: Product) => Promise<void>;
  resetCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    devtools((set) => ({
      items: [],
      isLoading: false,

      addItem: async (product: Product) => {
        set({ isLoading: true });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        set((state) => ({
          items: [...state.items, product],
          isLoading: false,
        }));
      },

      resetCart: () => set({ items: [] }),
    })),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => secureStorage),
    }
  )
);
