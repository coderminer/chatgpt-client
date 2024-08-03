import { chat } from "@/api/chat"
import { EventSourceMessage } from "@fortaine/fetch-event-source"


const Chat = () => {

  const ctrl = new AbortController()
  const onOpen = async (res: Response) => {
    console.log('res:', res)
  }

  const onMessage = (ev: EventSourceMessage) => {
    console.log('msg: ', ev)
  }

  const onError = (err: unknown) => {
    console.log('err: ', err)
  }

  const onClose = () => {
    console.log('close')
  }


  const handleChat = async () => {
    await chat({
      signal: ctrl.signal,
      stream: true,
      onclose: onClose,
      onerror: onError,
      onmessage: onMessage,
      onopen: onOpen,
      message: { model: "glm-4", messages: [{ role: 'user', content: 'hi'}] },
    });
  }  
  return (
    <div className="flex flex-col max-w-4xl bg-yellow-600 mx-auto h-full">
      <div>
        <button onClick={handleChat}>chat</button>
      </div>
    </div>
  )
}

export default Chat