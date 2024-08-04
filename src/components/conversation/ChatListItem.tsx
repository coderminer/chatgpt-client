import { Trash2 } from "lucide-react";
const ChatListItem = () => {
  return (
    <div className="flex items-center justify-between bg-[#f3f5fa] rounded shadow cursor-pointer group pr-1 h-16 dark:bg-background dark:shadow-zinc-50/20">
      <div className="flex items-center h-full">
        <div className="w-0.5 h-full group-hover:bg-indigo-500"></div>
        <div className="pl-1">
          <p className="truncate max-w-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatum de
          </p>
          <span className="text-xs text-gray-400">2024-08-04 12:25:12</span>
        </div>
      </div>
      <Trash2 className="w-4 h-4 hover:text-red-600 cursor-pointer" />
    </div>
  );
};

export default ChatListItem;
