import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

export const MessageItem = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn("flex gap-2 text-sm", className)}>{children}</div>;
};

export const MessageIcon = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-full shadow-lg w-12 h-12 flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MessageContent = ({
  className,
  children,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "p-3 rounded-lg shadow whitespace-pre-wrap min-h-12 leading-7",
        className
      )}
      style={{ ...style }}
    >
      {children}
    </div>
  );
};
