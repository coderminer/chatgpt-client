import { MessageCirclePlus, ScrollText, UserRound } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import logo from "@/assets/react.svg";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useChatStore } from "@/stores/chatStore";
import { useAuthStore } from "@/stores/authStore";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const startNewChat = useChatStore((state) => state.startMewChat);
  const isLogin = useAuthStore((state) => state.isLogin);
  const updateLogin = useAuthStore((state) => state.updateLogin);
  const handleLogin = () => {
    if (!isLogin) {
      setShow(true);
      return;
    }
  };
  return (
    <div
      className="absolute left-4 top-1/2 w-16 bg-white -translate-y-1/2 rounded-full flex-col 
        items-center py-8 space-y-4 shadow-md dark:bg-background dark:shadow-zinc-50/20 hidden sm:flex"
    >
      <Avatar>
        <AvatarImage src={logo} />
        <AvatarFallback>L</AvatarFallback>
      </Avatar>
      <div className="border-t border-b py-4 space-y-4">
        <div>
          <TooltipProvider delayDuration={10}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-indigo-500 hover:text-white w-10 h-10"
                  onClick={startNewChat}
                >
                  <MessageCirclePlus className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={20}>
                <p className="text-sm">开启新会话</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <TooltipProvider delayDuration={10}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-indigo-500 hover:text-white w-10 h-10"
                >
                  <ScrollText className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={20}>
                <p className="text-sm">会话历史</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className=" w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-500 text-white hover:text-white"
              onClick={handleLogin}
            >
              {isLogin ? <UserRound className="w-6 h-6" /> : <span>登录</span>}
            </Button>
          </PopoverTrigger>
          {isLogin && (
            <PopoverContent side="right" sideOffset={20}>
              <p>Kevin</p>
            </PopoverContent>
          )}
        </Popover>
      </div>
      <Dialog open={show} onOpenChange={(v) => setShow(v)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>登录</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="请输入用户名" />
            <Input placeholder="请输入密码" type="password" />
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                updateLogin(true);
                setShow(false);
              }}
            >
              登录
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SideBar;
