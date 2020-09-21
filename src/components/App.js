import React, {useState, useEffect} from 'react';

// Components
import Editor from "./Editor";
import Navbar from "./Navbar";

// Hooks
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html lang="en">
        <head>
          <title>CodeMirror Clone</title>
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
      </html>
      `)
    }, 750);
    
    return () => clearTimeout(timeout);
  }, [html, css, js])
  
  const download = type => {
    let target;
    let extension;
    switch (type) {
      case "html":
        target = html
        break
      case "css":
        target = css
        extension = "css"
        break
      case "js":
        target = js
        extension = "js"
        break
      default:
        target = srcDoc;
        extension = "html"
        break
    }
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(target));
    element.setAttribute('download', "index." + extension);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    return null
  }
  
  return (
    <>
      <div className="nav-pane">
      <Navbar download={download} />
      </div>
      <div className="editor-pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="editor-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
