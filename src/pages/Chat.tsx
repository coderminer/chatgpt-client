import { chat } from "@/api/chat";
import PromptInput from "@/components/prompt/PromptInput";
import { EventSourceMessage } from "@fortaine/fetch-event-source";
import { useChatStore } from "@/stores/chatStore";
import { nanoid } from "nanoid";
import MessageList from "@/components/messages/MessageList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";
import { useSize } from "ahooks";

const Chat = () => {
  const bottomRef = useRef(null)
  const bottomSize = useSize(bottomRef)
  const prompt = useChatStore((state) => state.prompt);
  const messages = useChatStore((state) => state.messages);
  const updatePrompt = useChatStore((state) => state.updatePrompt);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const ctrl = new AbortController();
  const onOpen = async (res: Response) => {
    console.log("res:", res);
  };

  const onMessage = (ev: EventSourceMessage) => {
    console.log("msg: ", ev);
  };

  const onError = (err: unknown) => {
    console.log("err: ", err);
  };

  const onClose = () => {
    console.log("close");
  };

  const handleChat = async () => {
    await chat({
      signal: ctrl.signal,
      stream: true,
      onclose: onClose,
      onerror: onError,
      onmessage: onMessage,
      onopen: onOpen,
      message: { model: "glm-4", messages: [{ role: "user", content: "hi" }] },
    });
  };

  const handleSend = async () => {
    console.log("prompt: ", prompt);
    updateMessage({ id: nanoid(), role: "user", content: prompt });
    updateMessage({
      id: nanoid(),
      role: "assistant",
      content: `在JavaScript中，instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。如果右侧的值不是一个对象，或者不是一个函数，那么它将抛出一个错误。

错误信息 "Right-hand side of 'instanceof' is not an object" 表示你尝试使用 instanceof 运算符，但是右侧的值不是一个有效的对象。这通常发生在以下几种情况：

右侧是一个 null 或者 undefined 值。
右侧是一个原始类型（如数字、字符串或布尔值），而不是一个对象。
右侧是一个函数，但它不是构造函数。
例如：`,
    });
    updatePrompt("");

    console.log("msgs: ", messages);
  };
  return (
    <div className="flex flex-col max-w-4xl mx-auto h-full p-2">
      <div style={{ height: `calc(100% - ${(bottomSize?.height || 0) + 16}px)` }}>
        <ScrollArea className="h-full">
          <MessageList messages={messages} />
        </ScrollArea>
      </div>
      <div ref={bottomRef} className="mt-4">
        <PromptInput handleSubmit={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
