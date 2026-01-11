
import { EngineInfo, RoadmapStep } from './types';

export const ENGINES: EngineInfo[] = [
  {
    id: 'godot',
    name: 'Godot Engine',
    description: '开源、轻量级且功能强大的全能引擎。自带中文，支持 2D 和 3D 开发，学习曲线非常平缓。',
    difficulty: '入门级',
    language: 'GDScript (类似 Python)',
    bestFor: '独立游戏、2D 横版、中小型项目',
    icon: 'fa-solid fa-robot',
    color: 'bg-blue-500'
  },
  {
    id: 'gamemaker',
    name: 'GameMaker',
    description: '2D 游戏开发者的首选。拥有可视化的拖拽系统，对完全不写代码的初学者非常友好。',
    difficulty: '入门级',
    language: 'GML (可视化拖拽 / 脚本)',
    bestFor: '2D 像素风游戏、射击游戏、RPG',
    icon: 'fa-solid fa-gamepad',
    color: 'bg-green-600'
  },
  {
    id: 'unity',
    name: 'Unity',
    description: '行业标准，资源极其丰富。无论是 2D、3D 还是 VR 都能胜任。教程多，就业前景广阔。',
    difficulty: '中等',
    language: 'C#',
    bestFor: '商业级 3D 游戏、高质量独立游戏',
    icon: 'fa-brands fa-unity',
    color: 'bg-gray-800'
  },
  {
    id: 'rpgmaker',
    name: 'RPG Maker',
    description: '不需要写一行代码。专为创作日式 RPG 设计，内置大量素材，适合只想讲故事的小白。',
    difficulty: '入门级',
    language: '无代码 / JavaScript 插件',
    bestFor: '剧情向 RPG、回合制游戏',
    icon: 'fa-solid fa-dragon',
    color: 'bg-red-500'
  },
  {
    id: 'scratch',
    name: 'Scratch',
    description: '由麻省理工学院开发。完全的积木式编程，是理解游戏逻辑和编程思维的最好起点。',
    difficulty: '入门级',
    language: '积木块可视化编程',
    bestFor: '编程启蒙、极简小游戏',
    icon: 'fa-solid fa-puzzle-piece',
    color: 'bg-orange-500'
  }
];

export const ROADMAP: RoadmapStep[] = [
  {
    title: '确定游戏创意',
    description: '不要上来就想做《艾尔登法环》。从模仿经典（如贪吃蛇、推箱子）或一个简单的核心玩法开始。',
    icon: 'fa-solid fa-lightbulb'
  },
  {
    title: '选择合适的引擎',
    description: '根据你的数学基础和是否有编程经验选择引擎。本站推荐小白首选 Godot 或 RPG Maker。',
    icon: 'fa-solid fa-screwdriver-wrench'
  },
  {
    title: '学习基础逻辑',
    description: '学习什么是变量、循环、条件判断。这是所有游戏的骨架。不需要深奥数学，只需要逻辑。',
    icon: 'fa-solid fa-code'
  },
  {
    title: '制作最小可行产品 (MVP)',
    description: '先让方块能动起来、能跳、有胜负。不要纠结美术，用简单的色块代替。',
    icon: 'fa-solid fa-cubes'
  },
  {
    title: '美术与音效注入',
    description: '去 itch.io 等网站下载免费素材。学会如何把图片和声音导入引擎，让游戏生动起来。',
    icon: 'fa-solid fa-palette'
  },
  {
    title: '测试与发布',
    description: '分享给朋友玩，听取反馈。修复 Bug 并不痛苦，它也是开发的一环。最后在 itch.io 发布你的作品！',
    icon: 'fa-solid fa-rocket'
  }
];
