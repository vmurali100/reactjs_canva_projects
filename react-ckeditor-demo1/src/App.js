import React, { useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [editorData, setEditorData] = useState('');
  const editorRef = useRef(null);

  const onChange = (event) => {
    setEditorData(event.editor.getData());
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onReady={(editor) => {
        // You can store a reference to the CKEditor instance here
        editorRef.current = editor;
      }}
      onChange={onChange}
    />
  );
}

export default App;
