import React from 'react';
import Editor from 'react-simple-code-editor';

const QueryEditor = ({ handleChange }) => {
    return <div>
        <Editor
            onValueChange={code => handleChange(code)}
            highlight={() => {}}
            padding={10}
            placeholder="Type query here..."
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "200px",
                border: "1px dashed black"
            }}
      />
        {/* <textarea 
            className="editor"
            onChange={e => handleChange(e.target.value)}
            placeholder="Type query here...">
        </textarea> */}
    </div>
}

export default QueryEditor;