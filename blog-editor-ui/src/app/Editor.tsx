import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { CodeNode, CodeHighlightNode } from '@lexical/code';
import { CodeBlockShortcutPlugin } from './CodeShortcutPlugin';
import { CodeHighlightPlugin } from './CodeHighlightPlugin';
import Toolbar from './Toolbar';

const theme = {
  paragraph: 'editor-paragraph',
  // 之後可以加 code 樣式，例如：
  // code: 'editor-code',
};

const initialConfig = {
  namespace: 'blog-editor',
  theme,
  nodes: [CodeNode, CodeHighlightNode], // ⬅ 一定要兩個
  onError(error: any) {
    console.error(error);
    throw error;
  },
};

function onChange(editorState: any) {
  editorState.read(() => {
    const json = editorState.toJSON();
    console.log('Editor JSON:', json);
    // 之後你可以在這裡加 debounce + IPC 寫檔
  });
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="editor-placeholder">輸入內容...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
      <CodeHighlightPlugin /> {/* ✅ 啟用 code highlight */}
      <CodeBlockShortcutPlugin />
      <div>123</div>
    </LexicalComposer>
  );
}
