import { IChatHistory, IMessage } from '@/types/chat'
import { nanoid } from 'nanoid'
import { create } from 'zustand'


type State = {
    prompt: string,
    history: boolean,
    activeId: string,
    messages: IMessage[],
    chats: IChatHistory[]
}

type Action = {
    updatePrompt: (value: State['prompt']) => void,
    updateMessage: (msg: IMessage) => void,
    startMewChat: () => void,
    updateHistory: (val: boolean) => void,
    updateActiveId: (val: string) => void,
    updateChats: (chat: IChatHistory) => void,
}

const systemMessage: IMessage = {
    id: nanoid(), role: 'system', content: `Hi，我是 Kimi～
很高兴遇见你！`}


export const useChatStore = create<State & Action>((set) => ({
    prompt: "",
    history: false,
    messages: [systemMessage],
    activeId: "",
    chats: [],

    updatePrompt: (value: string) => set(() => ({ prompt: value })),
    updateMessage: (msg: IMessage) => set((state) => ({ ...state, messages: [...state.messages, msg] })),
    startMewChat: () => set((state) => ({ ...state, messages: [systemMessage] })),
    updateHistory: (value: boolean) => set(() => ({ history: value })),
    updateActiveId: (val: string) => set(() => ({ activeId: val })),
    updateChats: (chat: IChatHistory) => set((state) => ({ ...state, chats: [chat, ...state.chats] }))
}))