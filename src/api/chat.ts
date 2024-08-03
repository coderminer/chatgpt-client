import { generateToken } from "@/lib/token"
import { IChatReq } from "@/types/chat"
import { fetchEventSource } from "@fortaine/fetch-event-source"

export const chat = async (req: IChatReq) => {
    if (req.stream) {
        return await chatStream(req)
    } else {
        return await chatJson(req)
    }
}

const chatStream = async (req: IChatReq) => {
    const token = generateToken()
    await fetchEventSource('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        signal: req.signal,
        openWhenHidden: true,
        onopen: req.onopen,
        onmessage: req.onmessage,
        onerror: req.onerror,
        onclose: req.onclose,
        body: JSON.stringify(req.message),
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
}

const chatJson = async (req: IChatReq) => {
    try {
        const res = await fetch('')
        req.onopen(res)
        const data = await res.json()
        // req.onmessage({})
        console.log(data)
    } catch (error) {
        req.onerror(error)
    } finally {
        req.onclose()
    }


}