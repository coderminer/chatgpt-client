import { IMessage } from "@/types/chat";
import MessageBox from "./MessageBox";
import { ScrollArea } from "../ui/scroll-area";

const MessageList = ({ messages }: { messages: IMessage[] }) => {
  return (
    <div className="space-y-4">
      {messages.map((msg) => {
        return <MessageBox key={msg.id} msg={msg} />;
      })}
    </div>
  );
};

export default MessageList;
