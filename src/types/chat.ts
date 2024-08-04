import { EventSourceMessage } from "@fortaine/fetch-event-source"

export type Role = 'user' | 'assistant' | 'system' | 'loading' | 'error'

export interface IChatMessage {
    role: Role,
    content: string,
}

export interface IMessage extends IChatMessage {
    id?: string
}

interface LlmReq {
    model: string,
    messages: IChatMessage []
}

export interface IChatReq {
    stream: boolean,
    signal: AbortSignal,
    onopen: (res: Response) => Promise<void>,
    onmessage: (ev: EventSourceMessage) => void,
    onerror: (err: unknown) => void,
    onclose: () => void,
    message: LlmReq
}


export interface IChatHistory {
    id: string,
    title: string,
    time: string
}