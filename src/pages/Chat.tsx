import { chat } from "@/api/chat";
import PromptInput from "@/components/prompt/PromptInput";
import { EventSourceMessage } from "@fortaine/fetch-event-source";

const Chat = () => {
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

  const handleSend = async (prompt: string) => {
    console.log("prompt: ", prompt);
  };
  return (
    <div className="flex flex-col max-w-4xl bg-white mx-auto h-full p-2">
      <div className="flex-1">top</div>
      <div>
        <PromptInput handleSubmit={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
