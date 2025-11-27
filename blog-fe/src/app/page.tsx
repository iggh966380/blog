import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Home() {
  const codeString = `
  function greet(name) {
    return "Hello, " + name;
  }
  console.log(greet("Jason"));
  `;

  const htmlCode = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Hello World</title>
    </head>
    <body>
      <h1>Hello, HTML!</h1>
    </body>
  </html>
  `;
  return (
    <div className="py-[1rem] w-[50%] lg:mx-auto">
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="html" style={oneDark} showLineNumbers>
        {htmlCode}
      </SyntaxHighlighter>
      <code>
        123123
        {'<div></div>'}
      </code>
    </div>
  );
}
