import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  
  const [documentTitle, setDocumentTitle] = useState("");
  useEffect(() => {
    const document.title = documentTitle;
  }, [documentTitle])

  return (
    <div className="App">
      <label htmlFor="title-input">
        Type in the input and look at the browser tab!
      </label>
      <input id="title-input" type="text" maxLength={25} value={documentTitle} onChange={(e) => setDocumentTitle(e.target.value)}/>
    </div>
  );
};

export default App;
