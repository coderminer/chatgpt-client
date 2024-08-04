import { IMessage } from "@/types/chat";
import { User } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";

const UserMessage = ({ msg }: { msg: IMessage }) => {
  return (
    <MessageItem className="flex-row-reverse">
      <MessageIcon className="bg-chat text-black">
        <User />
      </MessageIcon>
      <MessageContent
        className="bg-chat"
        style={{ maxWidth: "calc(100% - 7rem)" }}
      >
        {msg.content}
      </MessageContent>
    </MessageItem>
  );
};

export default UserMessage;
