
import React from 'react';
import { EngineInfo } from '../types';

interface EngineCardProps {
  engine: EngineInfo;
}

const EngineCard: React.FC<EngineCardProps> = ({ engine }) => {
  return (
    <div className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-current" style={{ color: engine.color.replace('bg-', '') === 'gray-800' ? '#1f2937' : 'inherit' }}>
      <div className={`w-12 h-12 ${engine.color} rounded-xl flex items-center justify-center mb-4 text-white text-xl shadow-lg`}>
        <i className={engine.icon}></i>
      </div>
      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
        {engine.name}
        <span className="text-xs font-normal px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">
          {engine.difficulty}
        </span>
      </h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {engine.description}
      </p>
      <div className="space-y-2 border-t pt-4 mt-auto">
        <div className="flex items-center text-xs text-gray-500">
          <i className="fa-solid fa-code w-5"></i>
          <span className="font-semibold mr-1">编程语言:</span> {engine.language}
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <i className="fa-solid fa-star w-5"></i>
          <span className="font-semibold mr-1">擅长领域:</span> {engine.bestFor}
        </div>
      </div>
    </div>
  );
};

export default EngineCard;
