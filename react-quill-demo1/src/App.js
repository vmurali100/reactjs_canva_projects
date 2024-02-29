import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include Snow theme styles


function App() {
  const [content, setContent] = useState('');
  const quillRef = useRef(null);
  return (
    <div>
      <ReactQuill
        ref={quillRef}
        theme="snow" // Choose a theme (optional)
        modules={{ toolbar: true }} // Enable toolbar (optional)
        value={content}
        onChange={setContent}
      />
    </div>
  );
  
}

export default App;
