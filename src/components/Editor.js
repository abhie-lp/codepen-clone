import React, {useState} from 'react';

// packages
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import {Controlled as ControlledEditor} from "react-codemirror2";

const Editor = (props) => {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  
  const [open, setOpen] = useState(true);
  
  const handleChange = (editor, data, value) => {
    onChange(value)
  }
  
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() =>  setOpen(prevState => !prevState)}>O/C</button>
      </div>
      
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true
        }}
      />
    </div>
  );
};

export default Editor;