import { IMessage } from "@/types/chat";
import { User } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";

const UserMessage = ({ msg }: { msg: IMessage }) => {
  return (
    <MessageItem className="flex-row-reverse">
      <MessageIcon className="bg-slate-300 text-black">
        <User />
      </MessageIcon>
      <MessageContent
        className="bg-indigo-700 text-white"
        style={{ maxWidth: "calc(100% - 7rem)" }}
      >
        {msg.content}
      </MessageContent>
    </MessageItem>
  );
};

export default UserMessage;
