import { useState } from "react";
import {
  ArrowUp,
  Bot,
  Globe,
  Image,
  MessageCircle,
  MessageCircleDashed,
  Paperclip,
  Plus,
  RotateCw,
  Telescope,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Bubble, BubbleContent } from "@/components/ui/bubble";

import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

const initialMessages = [
  {
    id: "1",
    role: "assistant",
    content: "Welcome to Forge! How can I help you today?",
  },
  {
    id: "2",
    role: "user",
    content: "Can you suggest a Push Day workout?",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Sure! Bench Press, Incline Dumbbell Press, Shoulder Press, Lateral Raises, and Triceps Pushdowns.",
  },
  {
    id: "4",
    role: "user",
    content: "How long should I rest between sets?",
  },
  {
    id: "5",
    role: "assistant",
    content: "60–90 seconds for hypertrophy, 2–3 minutes for strength.",
  },
];

const ChatBubble = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);

  const isBusy = false;
  const nextMessage = null;
  const status = "ready";

  const getMessageText = (message: any) =>
    typeof message?.content === "string" ? message.content : "";

  return (
    <>
      {/* Chat Window */}
      {open && (
        <MessageScrollerProvider>
          <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-4">
            <Card className="h-[560px] w-full max-w-sm gap-0 rounded-3xl">
              <CardHeader className="gap-1 border-b">
                <CardTitle>Forge Chat</CardTitle>
                <CardDescription>How can I help you today?</CardDescription>

                <CardAction>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="outline"
                        size="icon"
                        aria-label="Reset conversation"
                        onClick={() => setMessages(initialMessages)}
                        disabled={isBusy}
                      >
                        <RotateCw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>

                    <TooltipContent>
                      <p>Reset</p>
                    </TooltipContent>
                  </Tooltip>
                </CardAction>
              </CardHeader>

              <CardContent className="flex-1 overflow-hidden p-0">
                {messages.length === 0 ? (
                  <Empty className="h-full">
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <MessageCircleDashed className="h-6 w-6" />
                      </EmptyMedia>
                      <EmptyTitle>No messages yet</EmptyTitle>
                      <EmptyDescription>
                        Start a conversation with Forge.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                ) : (
                  <MessageScroller>
                    <MessageScrollerViewport>
                      <MessageScrollerContent
                        aria-busy={isBusy}
                        className="p-(--card-spacing)"
                      >
                        {messages.map((message) => (
                          <MessageScrollerItem
                            key={message.id}
                            scrollAnchor={message.role === "user"}
                          >
                            <Message
                              align={message.role === "user" ? "end" : "start"}
                            >
                              <MessageAvatar>
                                <Avatar>
                                  <AvatarImage
                                    src={
                                      message.role === "user"
                                        ? "/avatars/me.png"
                                        : "/avatars/forge.png"
                                    }
                                  />
                                  <AvatarFallback>
                                    {message.role === "user" ? (
                                      <User className="h-4 w-4" />
                                    ) : (
                                      <Bot className="h-4 w-4" />
                                    )}
                                  </AvatarFallback>
                                </Avatar>
                              </MessageAvatar>

                              <MessageContent>
                                <Bubble
                                  variant={
                                    message.role === "user"
                                      ? "default"
                                      : "muted"
                                  }
                                >
                                  <BubbleContent>
                                    {message.content}
                                  </BubbleContent>
                                </Bubble>
                              </MessageContent>
                            </Message>
                          </MessageScrollerItem>
                        ))}
                      </MessageScrollerContent>
                    </MessageScrollerViewport>

                    <MessageScrollerButton />
                  </MessageScroller>
                )}
              </CardContent>

              <CardFooter className="flex-col gap-2">
                <form className="w-full">
                  <InputGroup>
                    <div className="h-14 w-full px-3 py-2.5">
                      <span
                        className="line-clamp-2 opacity-60 data-[status=ready]:opacity-100"
                        data-status={status}
                      >
                        {nextMessage ? (
                          getMessageText(nextMessage)
                        ) : (
                          <span className="text-muted-foreground">
                            Demo is read only.
                          </span>
                        )}
                      </span>
                    </div>

                    <InputGroupAddon align="block-end" className="pt-1">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <InputGroupButton
                            aria-label="Add files"
                            type="button"
                            size="icon-sm"
                            variant="outline"
                          >
                            <Plus className="h-4 w-4" />
                          </InputGroupButton>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="start"
                          side="top"
                          className="w-44"
                        >
                          <DropdownMenuItem>
                            <Paperclip className="h-4 w-4" />
                            Add Photos & Files
                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          <DropdownMenuItem>
                            <Image className="h-4 w-4" />
                            Create Image
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            <Telescope className="h-4 w-4" />
                            Deep Research
                          </DropdownMenuItem>

                          <DropdownMenuItem>
                            <Globe className="h-4 w-4" />
                            Web Search
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <InputGroupButton
                        type="submit"
                        variant="default"
                        size="icon-sm"
                        disabled
                        className="ml-auto"
                      >
                        <ArrowUp className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </form>
              </CardFooter>
            </Card>

            <div className="px-0.5 text-center text-xs text-muted-foreground">
              Demo is read only. Press send to send messages.
            </div>
          </div>
        </MessageScrollerProvider>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 lg:bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-105 active:scale-95"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default ChatBubble;
