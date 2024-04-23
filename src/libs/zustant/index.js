/* eslint-disable no-unused-vars */
import { create } from 'zustand'

export const useStore = create((set) => ({
    isLogin: false,
    userData: null,
    isAdmin: false,
    selectOption: null,
    token: null,
    authModal:{
        open: false,
        setOpen: (data) => set((state) => ({ authModal: {...state.authModal, open: data} })),
        content: null,
        title: null,
        footer: null,
    },
    setToken: (data) => set((state) => ({ token: data })),
    setAuthModal: (data) => set((state) => ({ authModal: data })),
    setIsLogin: (data) => set((state) => ({ isLogin: data })),
    setIsAdmin: (data) => set((state) => ({ isAdmin: data })),
    setUserData: (data) => set((state) => ({ userData: data })),
    setSelectOption: (data) => set((state) => ({ selectOption: data })),
}))

window.store = useStore
