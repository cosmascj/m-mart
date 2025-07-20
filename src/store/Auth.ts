import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

export const secureStoreWrapper = {
  getItem: async (key: string) => {
    try {
      const value = await SecureStore.getItemAsync(key);
      return value || null;
    } catch (error) {
      console.error('Error retrieving item from SecureStore', error);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error('Error saving item to SecureStore', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error('Error removing item from SecureStore', error);
    }
  },
};



export type deliveryProps = {
  token?: string | null;
  email?: string | null;
};

interface UserState {
  appData: deliveryProps;
  updateAppData: (data: deliveryProps) => void;
}

const useAppData = create<UserState>()(
  devtools(
    persist(
      (set, get) => ({
        appData: {
          token: null,
          authToken: null,
          isOnboarded: false,
          isIntroShown: false,
          email: null,
          expirationTime: null,
          dailyHealthTime: null,
          currentOnboardingStatus: null
        },
        updateAppData: (data) => set((state) => ({ appData: { ...state.appData, ...data } })),
    
      }),
      {
        name: 'userKey',
        storage: createJSONStorage(() => secureStoreWrapper),
      }
    )
  )
);

export default useAppData;
