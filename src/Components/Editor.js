import React from 'react'
import AceEditor from 'react-ace'
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-monokai";

// import Allcontext from './Allcontext';
import textContext from './Context';
import { useContext, useState } from 'react';


const Editor = (props) => {

  const c=useContext(textContext);
  const {run,setRun}=c;

  const { language, value, setValue } = props;
  const JsButton = (language == "javascript")
  const setChange = (e) => {
    setValue(e)
  }

  const handleRun=()=>{
      setRun(!run);
      // console.log(run);
  }
const w=window.innerWidth;
  return (

    <>
      <div className=''>

        <div className={`my-1 mx-${w>750?'4':'0'} border border-danger border-2`} style={w>750?{ overflowY: "auto", overflowX: "hidden", height: "85vh"}:{height:"70vh", width:"98vw"}}>

          {(language=="javascript") && <button onClick={handleRun} className=' mx-3 my-2 btn btn-primary text-light position-absolute' style={{ top: "75vh", left: "15vw", zIndex: 2 }}>Run JavaScript</button>}
          <AceEditor
            mode={language}
            theme="monokai"
            name="blah2"
            // onLoad={this.onLoad}
            onChange={setChange}
            height={w>750?"83vh":"100%"}
            width={w>750?"40vw":"100%"}
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={value}
            setOptions={{
              useWorker: false,
              // enableBasicAutocompletion: false,
              // enableLiveAutocompletion: false,
              // enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }} />
        </div>
      </div>
    </>
  )
}

export default Editor