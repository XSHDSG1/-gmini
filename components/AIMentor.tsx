
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIMentor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: '你好！我是你的游戏开发 AI 导师。你可以告诉我你想做什么样的游戏，或者你目前最大的困惑是什么，我会为你量身定制建议。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 mb-20">
      <div className="glass-card rounded-3xl shadow-2xl overflow-hidden border border-indigo-100">
        <div className="gaming-gradient p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">AI 游戏导师</h3>
              <p className="text-xs text-white/80">随时为你解答开发难题</p>
            </div>
          </div>
          <div className="px-3 py-1 bg-green-400/20 rounded-full text-[10px] uppercase tracking-wider font-bold border border-green-400/30 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            在线中
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="h-[450px] overflow-y-auto p-6 space-y-6 bg-white/50"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none prose prose-sm max-w-none'
              }`}>
                {msg.role === 'model' ? (
                  <div className="whitespace-pre-wrap text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                ) : (
                  <p className="text-sm">{msg.content}</p>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 rounded-2xl p-4 rounded-tl-none shadow-sm flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
                <span className="text-xs text-gray-500 italic">导师正在思考方案...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="例如：我想做一个像《吸血鬼幸存者》那样的游戏，推荐用什么？"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg active:scale-95"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <div className="flex gap-2 mt-3">
            {['推荐引擎', '学习资源', '创意评估'].map(chip => (
              <button 
                key={chip}
                onClick={() => setInput(prev => prev + chip)}
                className="text-[10px] text-gray-500 border border-gray-200 px-2 py-1 rounded-md hover:bg-gray-50 transition-colors"
              >
                #{chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMentor;
