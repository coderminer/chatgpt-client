import { IMessage } from "@/types/chat";
import { Bot, User } from "lucide-react";

const MessageBox = ({ msg }: { msg: IMessage }) => {
  return (
    <div
      className={`flex gap-2 text-sm ${
        msg.role === "user" ? " flex-row-reverse" : ""
      }`}
    >
      <div
        className={`rounded-full h-fit p-3 shadow-lg ${
          msg.role === "user"
            ? " bg-chat text-black"
            : " bg-indigo-500 text-white"
        }`}
      >
        {msg.role === "user" ? (
          <User className="w-6 h-6" />
        ) : (
          <Bot className="w-6 h-6" />
        )}
      </div>
      <p
        className={`p-3 rounded-lg shadow whitespace-pre-wrap ${
          msg.role === "user" ? "bg-chat" : " bg-white"
        }`}
        style={{
          width: `${msg.role === "user" ? "" : "calc(100% - 88px)"}`,
          maxWidth: `calc(100% - 88px)`,
        }}
      >
        {msg.content}
      </p>
    </div>
  );
};

export default MessageBox;
