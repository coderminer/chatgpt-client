import { IMessage } from "@/types/chat";
import { Bot } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";
const AssistantMessage = ({ msg }: { msg: IMessage }) => {
  return (
    <MessageItem>
      <MessageIcon className="bg-indigo-500 text-white">
        <Bot />
      </MessageIcon>
      <MessageContent
        className="bg-white"
        style={{ width: "calc(100% - 7rem)" }}
      >
        {msg.content}
      </MessageContent>
    </MessageItem>
  );
};

export default AssistantMessage;
