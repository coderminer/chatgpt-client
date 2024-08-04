import { IMessage } from "@/types/chat";
import { GraduationCap } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";

const SystemMessage = ({ msg }: { msg: IMessage }) => {
  return (
    // <div className="flex gap-2 text-sm">
    //   <div className="rounded-full shadow-lg bg-indigo-500 text-white w-12 h-12 flex items-center justify-center">
    //     <GraduationCap />
    //   </div>
    //   <div
    //     className="p-3 rounded-lg shadow whitespace-pre-wrap bg-white"
    //     style={{ width: "calc(100% - 7rem)" }}
    //   >
    //     {msg.content}
    //   </div>
    // </div>
    <MessageItem>
      <MessageIcon className="bg-slate-400 text-white">
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
