import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from 'lexical';
import { $createCodeNode } from '@lexical/code';
import { $setBlocksType } from '@lexical/selection';
export default function Toolbar() {
  const [editor] = useLexicalComposerContext();

  const insertCodeBlock = () => {
    editor.update(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return;

      // ⭐ 將目前段落變成 Code Block
      $setBlocksType(selection, () => $createCodeNode('javascript'));
    });
  };

  return (
    <div className="toolbar">
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
      >
        B
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
      >
        I
      </button>
      <button
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
      >
        U
      </button>
      <button onClick={insertCodeBlock} type="button">
        插入 Code Block
      </button>
    </div>
  );
}
