import { Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { isEmpytOrWhiteSpace } from "@/lib";
import { KeyboardEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const PromptInput = ({
  handleSubmit,
}: {
  handleSubmit: (value: string) => Promise<void>;
}) => {
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();
  const handleKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isEmpytOrWhiteSpace(prompt)) {
        toast({
          description: "请输入您的问题",
          duration: 1500,
          variant: "destructive",
        });
        return;
      } else {
        handleSubmit(prompt);
      }
    }
  };

  const handleSend = () => {
    if (isEmpytOrWhiteSpace(prompt)) {
      toast({
        description: "请输入您的问题",
        duration: 1500,
        variant: "destructive",
      });
      return;
    }
    handleSubmit(prompt);
  };
  return (
    <div className="flex border rounded-lg p-2 space-x-2">
      <Textarea
        className="resize-none border-none ring-0 outline-none focus-visible:ring-0 shadow-none h-20"
        placeholder="请输入您的问题，Shift+Enter换行，Enter发送"
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyUp}
      />

      <div
        className={`self-end ${
          isEmpytOrWhiteSpace(prompt) ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          disabled={isEmpytOrWhiteSpace(prompt)}
          className={`${
            isEmpytOrWhiteSpace(prompt)
              ? "bg-gray-100"
              : "bg-indigo-600 text-white"
          }`}
          onClick={handleSend}
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default PromptInput;
