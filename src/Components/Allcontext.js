import React, { useState, useEffect } from 'react'
import textContext from './Context'


import { db, auth } from '../Config/Firebase'
import { setDoc, getDoc, doc } from 'firebase/firestore'


const Allcontext = (props) => {


  const setHtml = (e) => {
    localStorage.setItem('html', e);
    setHtmlState(e);
  }
  const setCss = (e) => {
    localStorage.setItem('css', e);
    setCssState(e);
  }
  const setJs = (e) => {
    setJsState(e);
    localStorage.setItem('js', e);
  }

//********** SATES ****************
  const [html, setHtmlState] = useState(localStorage.getItem('html'));
  const [css, setCssState] = useState(localStorage.getItem('css'));
  const [js, setJsState] = useState(localStorage.getItem('js'));

  // login area
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState('');

  const [run, setRun] = useState(false)
  const [showAlert, setshowAlert] = useState(false);
  const [alertMsg, setalertMsg] = useState('') 

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
      if (authToken != null) {
        console.log("New User Data Created");
        upload();
      }
    }
  }
  const upload = async () => {
    if (authToken == null || authToken == '') {
      setshowAlert(true);
      setTimeout(()=>{
        setshowAlert(false);
      },2000);
      setalertMsg("Kindly login to save progress ")
      // console.log("login to save progress")

      return
    }
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
      <textContext.Provider value={{ html, css, js, setCss, setHtml, setJs, password, setPassword, mail, setMail, authToken, setAuthToken, upload, fetch, run, setRun ,showAlert,setshowAlert,setalertMsg,alertMsg}}>
        {props.children}
      </textContext.Provider>
    </>
  )
}

export default Allcontext