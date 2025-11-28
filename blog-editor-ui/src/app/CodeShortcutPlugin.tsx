// CodeBlockShortcutPlugin.tsx
import { useEffect } from 'react';
import {
  $getSelection,
  $isRangeSelection,
  KEY_ENTER_COMMAND,
  COMMAND_PRIORITY_HIGH,
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createCodeNode } from '@lexical/code';
import { $setBlocksType } from '@lexical/selection';

export function CodeBlockShortcutPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      KEY_ENTER_COMMAND,
      (event) => {
        const selection = $getSelection();
        if (!$isRangeSelection(selection)) return false;

        const text = selection.getTextContent();

        // 偵測 ```
        if (text === '```') {
          event!.preventDefault();

          // 將該行轉為 CodeBlock
          $setBlocksType(selection, () => $createCodeNode('javascript'));

          return true;
        }

        return false;
      },
      COMMAND_PRIORITY_HIGH
    );
  }, [editor]);

  return null;
}
