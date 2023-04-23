import React, { useState, useEffect } from 'react'
import textContext from './Context'


import {db,auth} from '../Config/Firebase'
import {setDoc,getDoc,doc} from 'firebase/firestore'


const Allcontext = (props) => {

  const j=`function clearPage() {
    // Remove all HTML content from the body element
    document.body.innerHTML = "";
  }`


    const c=`
    body{
      background-color:rgb(227, 220, 202)
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 50px;
      text-align: center;
    }
    
    h1 {
      font-size: 48px;
      margin-bottom: 30px;
    }
    
    p {
      font-size: 24px;
      margin-bottom: 30px;
    }
    
    button {
      display: inline-block;
      padding: 15px 30px;
      background-color: #007bff;
      color: #fff;
      font-size: 20px;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.2s ease-in-out;
    }
    
    button:hover {
      background-color: #0062cc;
    }
    `
const h=`<div class="container" id="co">
<h1 id="c">Welcome to our Website</h1>
<p>Thank you for visiting our website.</p>
<button onclick="clearPage()">Let's Code</button>
</div>`

  const [html, setHtml] = useState(h);
  const [js, setJs] = useState(j);
  const [css, setCss] = useState(c);

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