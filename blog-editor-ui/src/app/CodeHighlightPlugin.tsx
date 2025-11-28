// CodeHighlightPlugin.tsx
import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { registerCodeHighlighting } from '@lexical/code';

export function CodeHighlightPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // 這裡假設 globalThis.Prism / window.Prism 已經在 prism-setup.ts 設好了
    return registerCodeHighlighting(editor);
  }, [editor]);

  return null;
}
