import React from "react";
import { LiveEditor, LiveProvider, LivePreview, LiveError } from "react-live";
import styled from "styled-components";

const CodeBlock = ({ live, smaller, noInline, children }) => {
  return (
    <LiveProvider code={children} noInline={noInline}>
      <Editor smaller={smaller}>
        <LiveEditor />
      </Editor>
      {live && <LivePreview />}
      {live && <LiveError />}
    </LiveProvider>
  );
};

const Editor = styled.div`
  font-family: monaco, menlo, monospace;
  font-size: ${p => (p.smaller ? "0.5em" : "0.75em")};

  textarea {
    padding: 0 !important;
    outline: none;
  }

  pre {
    padding: 0 !important;
  }
`;

export default CodeBlock;
