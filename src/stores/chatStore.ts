import { IMessage } from '@/types/chat'
import { create } from 'zustand'


type State = {
    prompt: string,
    messages: IMessage[]
}

type Action = {
    updatePrompt: (value: State['prompt']) => void,
    updateMessage: (msg: IMessage) => void,
}

export const useChatStore = create<State & Action>((set) => ({
    prompt: "",
    messages: [],

    updatePrompt: (value: string) => set(() => ({ prompt: value })),
    updateMessage: (msg: IMessage) => set((state) => ({ ...state, messages: [...state.messages, msg ] }))
}))