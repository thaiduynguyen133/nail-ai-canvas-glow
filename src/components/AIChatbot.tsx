
import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Xin chào! Tôi là trợ lý NailAI. Tôi có thể giúp gì cho bạn hôm nay?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Simulate AI response (would connect to a real API in production)
    setTimeout(() => {
      const responses = [
        "Đó là một câu hỏi hay về công nghệ NailAI của chúng tôi!",
        "Tôi có thể giúp bạn đặt lịch demo với đội ngũ của chúng tôi để xem NailAI hoạt động.",
        "Giải pháp AI của chúng tôi hoạt động với hầu hết các cài đặt tiệm nail hiện có.",
        "NailAI có thể tăng doanh thu của tiệm nail của bạn lên đến 30% thông qua các đề xuất cá nhân hóa.",
        "Tính năng thử móng ảo giúp giảm sự không hài lòng của khách hàng bằng cách hiển thị thiết kế trước khi áp dụng."
      ];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 rounded-full w-16 h-16 bg-gradient-to-r from-nail-500 to-purple-500 hover:from-nail-600 hover:to-purple-600 shadow-lg z-50"
        size="icon"
      >
        <Bot className="h-8 w-8" />
      </Button>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] h-[500px] flex flex-col p-0 gap-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle className="flex items-center">
              <Bot className="mr-2" />
              Trợ Lý NailAI
            </DialogTitle>
          </DialogHeader>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-nail-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="border-t p-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập tin nhắn của bạn..."
              className="flex-1"
            />
            <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
              <Send size={18} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AIChatbot;
