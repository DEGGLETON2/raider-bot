import { useState } from 'react';
import { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // TODO: Implement AI response logic here
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'I am processing your request...',
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-3/4 p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <span className="text-xs text-gray-400 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="animate-pulse">Thinking...</div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t dark:border-gray-700 p-4">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-500"
          >
            <PaperClipIcon className="h-5 w-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask RaiderBot anything..."
            className="flex-1 border dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
} 