
export interface EngineInfo {
  id: string;
  name: string;
  description: string;
  difficulty: '入门级' | '中等' | '挑战性';
  language: string;
  bestFor: string;
  icon: string;
  color: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
