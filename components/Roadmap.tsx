
import React from 'react';
import { ROADMAP } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">开发小游戏只需 6 步</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          不要被“程序员”这个词吓到。按照这个步骤走，即使是零基础的你也能做出第一款作品。
        </p>
      </div>
      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-200 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-12 relative z-10">
          {ROADMAP.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-1 text-center md:text-right">
                 {index % 2 === 0 ? (
                   <div className="md:pr-8">
                     <h4 className="text-xl font-bold text-indigo-600 mb-2">Step {index + 1}</h4>
                     <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{step.description}</p>
                   </div>
                 ) : <div className="hidden md:block"></div>}
              </div>

              <div className="w-16 h-16 bg-white border-4 border-indigo-500 rounded-full flex items-center justify-center text-indigo-500 text-2xl shadow-xl transform transition hover:scale-110">
                <i className={step.icon}></i>
              </div>

              <div className="flex-1 text-center md:text-left">
                {index % 2 !== 0 ? (
                  <div className="md:pl-8">
                     <h4 className="text-xl font-bold text-indigo-600 mb-2">Step {index + 1}</h4>
                     <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ) : <div className="hidden md:block"></div>}
                
                {/* Mobile text visibility fix */}
                <div className="md:hidden mt-2">
                   {index % 2 === 0 ? (
                     <div>
                       <h4 className="text-xl font-bold text-indigo-600 mb-2">Step {index + 1}</h4>
                       <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                       <p className="text-gray-600 leading-relaxed">{step.description}</p>
                     </div>
                   ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
