import { IMessage } from "@/types/chat";
import { GraduationCap } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";

const SystemMessage = ({ msg }: { msg: IMessage }) => {
  return (
    <MessageItem>
      <MessageIcon className="bg-yellow-600 text-white">
        <GraduationCap />
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

export default SystemMessage;
