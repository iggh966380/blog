// src/prism-setup.ts
import Prism from 'prismjs';

// 按需載入你要的語言
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

// 給 TypeScript 用的宣告（不寫也沒關係，只是少一點紅線）
declare global {
  interface Window {
    Prism: typeof Prism;
  }
}

// ⭐⭐ 關鍵：在任何 Lexical / @lexical/code 被 import 之前，就把 Prism 掛到 global
if (typeof window !== 'undefined') {
  window.Prism = Prism;
}

// 如果你比較想用 globalThis，也可以：
// (globalThis as any).Prism = Prism;
