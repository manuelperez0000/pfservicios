/* eslint-disable no-unused-vars */
import { create } from 'zustand'


export const useStore = create((set) => ({
    isLogin: false,
    userData: null,
    selectOption: null,
    setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
    setUserData: (data) => set((state) => ({ userData: data })),
    setSelectOption: (data) => set((state) => ({ selectOption: data })),
}))


