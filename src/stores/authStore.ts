import { create } from 'zustand'

type State = {
    isLogin: boolean
}

type Action = {
    updateLogin: (val: boolean) => void
}

export const useAuthStore = create<State & Action>((set) => ({
    isLogin: false,
    updateLogin: (value: boolean) => set(() => ({ isLogin: value })),
}))