
import { Project, DesignerWork, PhotographyWork } from './types';

export const MY_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina 操作系统概念',
    category: 'UI/UX 设计',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1200',
    description: '一个专注于空间计算和正念体验的革命性操作系统。',
    year: '2024',
    color: '#E0F2FE'
  },
  {
    id: '2',
    title: 'Aura 智能手表',
    category: '工业设计',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200',
    description: '强调循环经济和可持续性的极简可穿戴技术。',
    year: '2023',
    color: '#FEF3C7'
  },
  {
    id: '3',
    title: 'Ether 品牌身份',
    category: '品牌视觉',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    description: '为去中心化云计算平台打造的动态视觉识别系统。',
    year: '2024',
    color: '#FCE7F3'
  },
  {
    id: '4',
    title: 'Zenith 建筑可视化',
    category: '3D 建模',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: '受粗野主义和有机形式启发的概念住宅综合体。',
    year: '2023',
    color: '#DCFCE7'
  }
];

export const EXTERNAL_WORKS: DesignerWork[] = [
  { id: 'e1', author: '陈雨', title: '霓虹流转 Neon Flux', thumbnail: 'https://picsum.photos/seed/ext1/600/600', likes: 1204 },
  { id: 'e2', author: 'Marco Rossi', title: '抽象流 Abstract Flow', thumbnail: 'https://picsum.photos/seed/ext2/600/600', likes: 843 },
  { id: 'e3', author: '林思远', title: '赛博修道 Cyber Monk', thumbnail: 'https://picsum.photos/seed/ext3/600/600', likes: 2150 },
  { id: 'e4', author: '张涵', title: '柔和阴影 Soft Shadows', thumbnail: 'https://picsum.photos/seed/ext4/600/600', likes: 567 },
  { id: 'e5', author: 'David K.', title: '线性逻辑 Linear Logic', thumbnail: 'https://picsum.photos/seed/ext5/600/600', likes: 932 },
  { id: 'e6', author: '王悦', title: '绚丽虚空 Vibrant Void', thumbnail: 'https://picsum.photos/seed/ext6/600/600', likes: 1100 }
];

export const PHOTOGRAPHY_WORKS: PhotographyWork[] = [
  { id: 'p1', title: '极境之蓝', location: '冰岛，雷克雅未克', image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800', aspectRatio: 'portrait' },
  { id: 'p2', title: '都市重构', location: '日本，东京', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800', aspectRatio: 'landscape' },
  { id: 'p3', title: '光影缝隙', location: '中国，上海', image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800', aspectRatio: 'square' },
  { id: 'p4', title: '荒原呼吸', location: '美国，犹他州', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800', aspectRatio: 'portrait' },
  { id: 'p5', title: '暮色边界', location: '意大利，托斯卡纳', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800', aspectRatio: 'landscape' },
  { id: 'p6', title: '寂静森林', location: '加拿大，班夫', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', aspectRatio: 'square' }
];
