import { IMessage } from "@/types/chat";
import { Bot } from "lucide-react";
import { MessageContent, MessageIcon, MessageItem } from "./MessageWrap";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// @ts-expect-error - handle missing typings for this package
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error - handle missing typings for this package
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AssistantMessage = ({ msg }: { msg: IMessage }) => {
  return (
    <MessageItem>
      <MessageIcon className="bg-indigo-500 text-white">
        <Bot />
      </MessageIcon>
      <MessageContent
        className="bg-white"
        style={{ width: "calc(100% - 6rem)" }}
      >
        {/* <Markdown remarkPlugins={[remarkGfm]}>{msg.content}</Markdown> */}
        <Markdown
          remarkPlugins={[remarkGfm]}
          children={msg.content}
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={oneDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </MessageContent>
    </MessageItem>
  );
};

export default AssistantMessage;
