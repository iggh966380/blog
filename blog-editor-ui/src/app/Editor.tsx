import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import Toolbar from './Toolbar';
const theme = {
  paragraph: 'editor-paragraph',
};

function onChange(editorState: any) {
  editorState.read(() => {
    // 這裡就是「編輯器內容改變」可 hook 的地方
    // 例如你可以 debounce 500ms 然後走 IPC 去存入檔案
    const json = editorState.toJSON();
    console.log('Editor JSON:', json);
  });
}

const initialConfig = {
  namespace: 'blog-editor',
  theme,
  onError(error: any) {
    throw error;
  },
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar></Toolbar>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor-input" />}
        placeholder={<div className="editor-placeholder">輸入內容...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}
