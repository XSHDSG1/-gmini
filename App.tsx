
import React, { useState } from 'react';
import { ENGINES } from './constants';
import EngineCard from './components/EngineCard';
import Roadmap from './components/Roadmap';
import AIMentor from './components/AIMentor';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'engines' | 'roadmap' | 'mentor'>('home');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 gaming-gradient rounded-lg flex items-center justify-center text-white shadow-lg">
              <i className="fa-solid fa-terminal text-xl"></i>
            </div>
            <span className="font-extrabold text-xl tracking-tight hidden sm:inline-block">GameDev<span className="text-indigo-600">Navigator</span></span>
          </div>

          <nav className="flex items-center gap-1 sm:gap-6">
            <button onClick={() => scrollToSection('engines')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">推荐软件</button>
            <button onClick={() => scrollToSection('roadmap')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">开发路径</button>
            <button onClick={() => scrollToSection('mentor')} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-indigo-700 transition-all flex items-center gap-2">
              <i className="fa-solid fa-comment-dots"></i>
              AI 导师
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold border border-indigo-100">
            🎮 开启你的第一个游戏项目
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            从<span className="text-indigo-600">纯新手</span>到独立开发者<br />
            让你的创意在电脑上<span className="text-purple-600">跳动</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            不需要数学天才，不需要十年寒窗。选对工具，掌握路径，你现在就能开始开发你的第一款电脑小游戏。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('engines')}
              className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all w-full sm:w-auto"
            >
              挑选开发软件
            </button>
            <button 
              onClick={() => scrollToSection('mentor')}
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all w-full sm:w-auto"
            >
              咨询 AI 导师
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 w-full">
        {/* Engines Section */}
        <section id="engines" className="py-20 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">小白最推荐的 5 款开发软件</h2>
            <p className="text-gray-500">根据你的兴趣和基础，选择最适合你的“游戏引擎”。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ENGINES.map(engine => (
              <EngineCard key={engine.id} engine={engine} />
            ))}
          </div>
          <div className="mt-12 p-8 bg-indigo-50 rounded-3xl border border-indigo-100 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl shrink-0">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">纠结症救星？</h4>
              <p className="text-gray-600">
                如果你想做 <span className="font-bold text-indigo-600">2D 独立游戏</span>：选 <span className="font-bold">Godot</span> 或 <span className="font-bold">GameMaker</span>。<br />
                如果你想做 <span className="font-bold text-indigo-600">3D 游戏</span>：选 <span className="font-bold">Unity</span>。<br />
                如果你 <span className="font-bold text-indigo-600">完全不想写代码</span>：选 <span className="font-bold">RPG Maker</span>。
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 scroll-mt-20 border-t border-gray-100">
          <Roadmap />
        </section>

        {/* AI Mentor Section */}
        <section id="mentor" className="py-20 scroll-mt-20 border-t border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">还是不知道怎么开始？</h2>
            <p className="text-gray-500">在下面输入你的想法，AI 导师会给你最专业的指导。</p>
          </div>
          <AIMentor />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 gaming-gradient rounded flex items-center justify-center text-white">
                  <i className="fa-solid fa-terminal text-sm"></i>
                </div>
                <span className="font-bold text-lg">GameDev Navigator</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                我们致力于为每一位想要创造世界的普通人提供起点。技术不是壁垒，创意才是核心。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">学习资源</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Bilibili 游戏开发教程推荐</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Itch.io 免费素材站</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Indienova 独立游戏社区</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">关注我们</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <i className="fa-brands fa-discord"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GameDev Navigator. 纯新手友好指南.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
