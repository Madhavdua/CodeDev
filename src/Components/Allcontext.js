import React, { useState, useEffect } from 'react'
import textContext from './Context'


import {db,auth} from '../Config/Firebase'
import {setDoc,getDoc,doc} from 'firebase/firestore'


const Allcontext = (props) => {


  const [html, setHtml] = useState("<h1>Let's Write Some Code</h1>");
  const [js, setJs] = useState('');
  const [css, setCss] = useState('');

  // login area
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  const [run, setRun] = useState(false)

  // backend
  const fetch = async () => {
    if (authToken == '') {
      console.log("no user logged in")
      return
    }
    const docRef = doc(db, "Code", `${authToken}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const result = docSnap.data();
      // console.log("Document data:", result);
      setCss(result.Css);
      setHtml(result.Html);
      setJs(result.Js);

    } else {
      // docSnap.data() will be undefined in this case
      if(authToken!=null)
      {console.log("New User Data Created");
      upload();}
    }
  }
  const upload = async () => {
    if(authToken==null || authToken == ''){
      console.log("login to save progress")
      
      return}
    const newCode = {
      Html: html,
      Css: css,
      Js: js,
      User: authToken
    }
    const docRef = doc(db, "Code", `${authToken}`);
    try {
      await setDoc(docRef, newCode, { merge: true });
      return
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <textContext.Provider value={{ html, css, js, setCss, setHtml, setJs, password, setPassword, mail, setMail, authToken, setAuthToken,upload,fetch,run,setRun}}>
        {props.children}
      </textContext.Provider>
    </>
  )
}

export default Allcontext