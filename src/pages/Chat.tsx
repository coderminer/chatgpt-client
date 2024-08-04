import { chat } from "@/api/chat";
import PromptInput from "@/components/prompt/PromptInput";
import { EventSourceMessage } from "@fortaine/fetch-event-source";
import { useChatStore } from "@/stores/chatStore";
import { nanoid } from "nanoid";
import MessageList from "@/components/messages/MessageList";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { useSize } from "ahooks";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

const Chat = () => {
  const bottomRef = useRef(null);
  const bottomSize = useSize(bottomRef);
  const scrollRef =
    useRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>>(null);
  const prompt = useChatStore((state) => state.prompt);
  const messages = useChatStore((state) => state.messages);
  const updatePrompt = useChatStore((state) => state.updatePrompt);
  const updateMessage = useChatStore((state) => state.updateMessage);
  const ctrl = new AbortController();
  const onOpen = async (res: Response) => {
    console.log("res:", res);
  };

  const onMessage = (ev: EventSourceMessage) => {
    console.log("msg: ", ev);
  };

  const onError = (err: unknown) => {
    console.log("err: ", err);
  };

  const onClose = () => {
    console.log("close");
  };

  const handleChat = async () => {
    await chat({
      signal: ctrl.signal,
      stream: true,
      onclose: onClose,
      onerror: onError,
      onmessage: onMessage,
      onopen: onOpen,
      message: { model: "glm-4", messages: [{ role: "user", content: "hi" }] },
    });
  };

  const handleSend = async () => {
    console.log("prompt: ", prompt);
    updateMessage({
      id: nanoid(),
      role: "user",
      content: `- Role: 无限流小说副本设计专家
- Background: 您希望设计一个具有深层主题内核和丰富情节点的副本，通过独特的世界观和背景故事吸引读者。
- Profile: 您是一位专注于创造引人入胜副本体验的专家，擅长将各种元素融入副本设计中。
- Skills: 文学创作、主题探索、民俗研究、玄学应用、百科知识、世界观构建。
- Goals: 设计一个以特定主题元素为核心，具有新颖有趣、惊险刺激甚至恐怖惊悚的副本，增加小说的深度和吸引力。
- Constrains: 副本设计需确保主题内核的一致性，同时在日常生活、历史、科幻或玄幻场景中融入关键元素，创造出独特的世界观。
- OutputFormat: 副本设计文档，包括副本标题、主题内核描述、场景名称、关键元素、游戏规则、剧情发展、NPC角色、死亡方式、通关条件、背景故事、真相。
- Workflow:
  1. 接受用户的信息，并确定副本的深层主题内核。
  2. 选择一个日常生活、历史、科幻或玄幻场景作为副本的主要场景，并为场景起一个名字，作为副本标题。
  3. 结合中西方民俗和玄学等要素，构建副本的世界观，可以是中式恐怖、西式恐怖或者克苏鲁。
  4. 设计与主题内核和场景紧密相连的游戏规则，规则可以是解谜、生存、对抗等等，复杂且有趣。
  5. 创造与主题内核和场景相关的NPC角色和剧情线。
  6. 设计可能的死亡方式，确保它们与主题内核和场景的联系。
  7. 确定副本的通关条件。
  8. 编写一段具体的背景故事，为副本设定基调，200字左右。
  9. 给出背景故事的真相。
- 输出副本设计的初步结果，并输出以下文字：“以上是Kimi为你设计的无限流副本，是否需要针对副本设计的某个部分进行进一步细化？”
- Examples:
  副本标题：《星陨之城》
  主题内核：生存
  场景名称：星陨之城
  场景描述：一个位于遥远星系边缘的废弃太空站，传说中是星际旅行者的最后归宿。
  关键元素：星核，一种能够操控星辰轨迹的神秘力量源泉。
  游戏规则：玩家必须在星陨之城中寻找星核碎片，解开其力量，同时抵御来自异星生物的侵袭。
  剧情发展：玩家在探索星陨之城的过程中，逐渐揭开太空站废弃的真相和星核的秘密。
  NPC角色：太空站的前工作人员，他们或许知道星核的秘密，但也可能因长时间的孤独而变得疯狂。
  死亡方式：异星生物的攻击、太空站的陷阱、解谜失败导致的爆炸。
  通关条件：成功解开星核的力量，揭开太空站的秘密，并安全逃离星陨之城。
  背景故事：星陨之城曾是星际旅行者的圣地，一个充满希望和梦想的太空站。然而，随着一次灾难性的事件，太空站与外界失去了联系，成为了一个被遗忘的角落。传说，在太空站的核心，隐藏着一种名为星核的神秘力量，它能够操控星辰的轨迹，甚至改变命运。但星核的力量也是一把双刃剑，它不仅带来了希望，也带来了毁灭。玩家们被选中进入星陨之城，他们必须在这座废弃的太空站中寻找星核的碎片，解开其力量的秘密。但太空站并不是空无一人，异星生物在暗处潜伏，前工作人员的幽灵在走廊中游荡。玩家们必须在这场生死游戏中找到生存的希望，或是成为星陨之城的又一个传说。
  真相：星核的力量并非自然形成，而是太空站的科学家们在进行一项禁忌实验时意外创造的。这项实验试图通过操控星辰的轨迹来改变人类的命运，但最终失控，导致了太空站的毁灭。
- Initialization: 直接输出以下文字：'欢迎来到 Kimi 的无限流创作工作室，让我们一起打造一个令人难忘的无限流副本吧！请告诉我你想要创作的故事主题，我们将从那里开始构建。'`,
    });
    updateMessage({
      id: nanoid(),
      role: "assistant",
      content: `在JavaScript中，instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。如果右侧的值不是一个对象，或者不是一个函数，那么它将抛出一个错误。

错误信息 "Right-hand side of 'instanceof' is not an object" 表示你尝试使用 instanceof 运算符，但是右侧的值不是一个有效的对象。这通常发生在以下几种情况：

右侧是一个 null 或者 undefined 值。
右侧是一个原始类型（如数字、字符串或布尔值），而不是一个对象。
右侧是一个函数，但它不是构造函数。
例如：`,
    });
    updatePrompt("");

    console.log("msgs: ", messages);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView(false)
  }, [messages]);
  
  return (
    <div className="flex flex-col max-w-4xl h-full w-full p-2">
      <div
        style={{ height: `calc(100% - ${(bottomSize?.height || 0) + 16}px)` }}
      >
        <ScrollArea className="h-full">
          <div ref={scrollRef}>
            <MessageList messages={messages} />
          </div>
        </ScrollArea>
      </div>
      <div ref={bottomRef} className="mt-4">
        <PromptInput handleSubmit={handleSend} />
      </div>
    </div>
  );
};

export default Chat;
