import { chat } from "@/api/chat";
import PromptInput from "@/components/prompt/PromptInput";
import { EventSourceMessage } from "@fortaine/fetch-event-source";
import { useChatStore } from "@/stores/chatStore";
import { nanoid } from "nanoid";
import MessageList from "@/components/messages/MessageList";

const Chat = () => {
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
      content: "the ai answer",
    });
    updatePrompt("");

    console.log("msgs: ", messages);
  };
  return (
    <div className="flex flex-col max-w-4xl mx-auto h-full p-2">
      <div className="flex-1">
        <MessageList messages={messages} />
      </div>
      <div>
        <PromptInput handleSubmit={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
