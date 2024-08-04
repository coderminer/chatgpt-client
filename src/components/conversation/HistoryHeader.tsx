import { CircleX } from "lucide-react";
import { useChatStore } from "@/stores/chatStore";

const HistoryHeader = () => {
  const updateHistory = useChatStore((state) => state.updateHistory);
  return (
    <div className="flex items-center h-10 justify-between px-2 bg-indigo-500 text-sm rounded-t-md text-white">
      <span>会话历史</span>
      <CircleX
        className="cursor-pointer"
        onClick={() => updateHistory(false)}
      />
    </div>
  );
};

export default HistoryHeader;
