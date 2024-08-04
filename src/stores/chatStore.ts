import { IMessage } from '@/types/chat'
import { nanoid } from 'nanoid'
import { create } from 'zustand'


type State = {
    prompt: string,
    messages: IMessage[]
}

type Action = {
    updatePrompt: (value: State['prompt']) => void,
    updateMessage: (msg: IMessage) => void,
    startMewChat: () => void,
}

const systemMessage: IMessage = {
    id: nanoid(), role: 'system', content: `Hi，我是 Kimi～
很高兴遇见你！你可以随时把网址🔗或者文件📃发给我，我来帮你看看`}


export const useChatStore = create<State & Action>((set) => ({
    prompt: "",
    messages: [systemMessage],

    updatePrompt: (value: string) => set(() => ({ prompt: value })),
    updateMessage: (msg: IMessage) => set((state) => ({ ...state, messages: [...state.messages, msg] })),
    startMewChat: () => set((state) => ({ ...state, messages: [systemMessage] })),
}))