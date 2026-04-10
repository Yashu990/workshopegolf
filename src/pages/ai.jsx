import React, { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Send, Bot, User as UserIcon } from 'lucide-react';
import { cn } from '../components/ui/Button';

export default function AI() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: "Hello! I'm your Golf AI Coach. Based on your recent Pebble Beach session, I noticed your tempo was a bit quick on the backswing. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'ai', 
        text: "I can definitely help with that. Try counting '1-2' on the backswing and '3' on the downswing. Would you like me to add a tempo drill to your practice plan?" 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto">
      <div className="p-4 border-b border-primary/10 bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center gap-3">
        <div className="bg-button/10 p-2 rounded-full">
          <Bot className="text-button w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-primary">AI Coach</h1>
          <p className="text-xs text-primary75">Always here to help your swing</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg border border-primary/10">
          <img src="/images/ai_golf_analysis_1775826196730.png" alt="AI Golf Analysis" className="w-full h-48 object-cover" />
        </div>
        {messages.map((msg) => (
          <div key={msg.id} className={cn("flex w-full", msg.sender === 'user' ? "justify-end" : "justify-start")}>
            <div className={cn(
              "max-w-[80%] rounded-2xl p-4 shadow-sm",
              msg.sender === 'user' 
                ? "bg-button text-white rounded-tr-sm" 
                : "bg-white border border-primary/5 rounded-tl-sm"
            )}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-background/90 backdrop-blur-md p-4 border-t border-primary/10 w-full sm:bottom-0 sm:pb-4 sm:max-w-4xl sm:mx-auto">
        <div className="flex gap-2 w-full">
          <input 
            type="text"
            className="flex-1 h-12 px-4 rounded-full border border-primary/20 bg-card focus:outline-none focus:ring-2 focus:ring-button shadow-sm"
            placeholder="Ask about your swing, drills, or performance..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            onClick={handleSend}
            className="h-12 w-12 rounded-full bg-button text-white flex items-center justify-center hover:bg-button/90 flex-shrink-0 shadow-sm transition-transform active:scale-95"
          >
            <Send size={20} className="mr-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
