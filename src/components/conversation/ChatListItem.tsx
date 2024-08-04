import { IChatHistory } from "@/types/chat";
import { Trash2 } from "lucide-react";
const ChatListItem = ({
  chat,
  active,
  handleItem,
}: {
  chat: IChatHistory;
  active: boolean;
  handleItem: () => void;
}) => {
  return (
    <div
      className={`flex items-center justify-between rounded shadow cursor-pointer group pr-1 h-16  ${
        active
          ? "bg-indigo-500 text-white"
          : "bg-[#f3f5fa] dark:bg-background dark:shadow-zinc-50/20"
      }`}
      onClick={() => handleItem()}
    >
      <div className="flex items-center h-full">
        <div className="w-0.5 h-full group-hover:bg-indigo-500"></div>
        <div className="pl-1">
          <p className="truncate max-w-60">{chat.title}</p>
          <span className="text-xs text-gray-400">{chat.time}</span>
        </div>
      </div>
      <Trash2 className="w-4 h-4 hover:text-red-600 cursor-pointer" />
    </div>
  );
};

export default ChatListItem;
