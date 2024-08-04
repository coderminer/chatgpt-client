import { IMessage } from "@/types/chat";
import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";
import SystemMessage from "./SystemMessage";

const MessageBox = ({ msg }: { msg: IMessage }) => {
  return (
    <div>
      {(() => {
        switch (msg.role) {
          case 'user':
            return <UserMessage msg={msg} />;
          case "assistant":
            return <AssistantMessage msg={msg} />;
          case "system":
            return <SystemMessage msg={msg} />
        }
      })()}
    </div>
  );
};
export default MessageBox;
