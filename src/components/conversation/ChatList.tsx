import ChatListItem from "./ChatListItem";
import { useChatStore } from "@/stores/chatStore";

const ChatList = () => {
  const chatHistory = useChatStore((state) => state.chats);
  const activeId = useChatStore((state) => state.activeId);
  const updateActiveId = useChatStore((state) => state.updateActiveId);
  return (
    <div className="space-y-1.5 px-2">
      {chatHistory.map((chat) => {
        return (
          <ChatListItem
            key={chat.id}
            chat={chat}
            active={chat.id === activeId}
            handleItem={() => updateActiveId(chat.id)}
          />
        );
      })}
    </div>
  );
};

export default ChatList;
