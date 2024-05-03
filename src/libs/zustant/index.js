/* eslint-disable no-unused-vars */
import { createWithEqualityFn } from 'zustand/traditional'

export const useStore = createWithEqualityFn((set) => ({
    isLogin: false,
    userData: null,
    isAdmin: false,
    selectOption: null,
    token: null,
    openLateralNav: true,
    authModal:{
        open: false,
        setOpen: (data) => set((state) => ({ authModal: {...state.authModal, open: data} })),
        content: null,
        title: null,
        footer: null,
    },
    setLateralNav: () => set((state) => ({ openLateralNav: !state.openLateralNav })),
    setToken: (data) => set((state) => ({ token: data })),
    setAuthModal: (data) => set((state) => ({ authModal: data })),
    setIsLogin: (data) => set((state) => ({ isLogin: data })),
    setIsAdmin: (data) => set((state) => ({ isAdmin: data })),
    setUserData: (data) => set((state) => ({ userData: data })),
    setSelectOption: (data) => set((state) => ({ selectOption: data })),
}))

window.store = useStore
