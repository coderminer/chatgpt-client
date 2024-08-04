import HistoryHeader from "./HistoryHeader";
import ChatList from "./ChatList";

const History = () => {
  return (
    <div className="w-72 bg-white rounded-md space-y-1 h-full dark:bg-background shadow-md dark:shadow-zinc-50/20">
      <HistoryHeader />
      <ChatList />
    </div>
  );
};

export default History;
