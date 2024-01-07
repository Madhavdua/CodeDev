import React from 'react'
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-monokai";

// import Allcontext from './Allcontext';
import textContext from './Context';
import { useContext } from 'react';
import './style.css'

const Editor = (props) => {

  const c=useContext(textContext);
  const {run,setRun}=c;

  const { language, value, setValue } = props;
  // const JsButton = (language == "javascript")
  const setChange = (e) => {
    setValue(e)
  }

  const handleRun=()=>{
      setRun(!run);
      // console.log(run);
  }
// const w=window.innerWidth;
  return (

    <>
      <div className='py-2'>

        <div className="py-2 editor">

          {(language=="javascript") && <button onClick={handleRun} className=' btn btn-primary text-light position-absolute' style={{ top: "75vh", left: "30vw", zIndex: 2 }}>Run JavaScript</button>}
          <AceEditor
            mode={language}
            theme="monokai"
            name="blah2"
            // onLoad={this.onLoad}
            onChange={setChange}
            height="100%"
            width="100%"
            fontSize={22}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={{
              useWorker: false,
              // enableBasicAutocompletion: true,
              // enableLiveAutocompletion: true,
              // enableSnippets: true,
              showLineNumbers: true,
              tabSize: 2,
            }} />
        </div>
      </div>
    </>
  )
}

export default Editor