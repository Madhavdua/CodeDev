import React from 'react'
import textContext from '../Components/Context'
import { useContext ,useEffect} from 'react'

import {db,auth} from '../Config/Firebase'
import {setDoc,getDoc,doc} from 'firebase/firestore'

const Store = () => {
  const c=useContext(textContext);
  const {html,css,js,setCss,setHtml,setJs,authToken}=c;

useEffect(() => {
  fetch();
}, [])



// backend
const fetch=async ()=>{
  if(authToken==''){
    console.log("no user logged in")
    return
  }
  const docRef = doc(db, "Code", `${authToken}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const result=docSnap.data();
    // console.log("Document data:", result);
    setCss(result.Css);
    setHtml(result.Html);
    setJs(result.Js);

  } else {
    // docSnap.data() will be undefined in this case
    console.log("New User Data Created");
    upload();
  }
}
const upload=async()=>{
  if(authToken==''){
    console.log("no user logged in")
    return
  }
  const newCode={
    Html:html,
    Css:css,
    Js:js,
    User:authToken
  }
  const docRef=doc(db,"Code",`${authToken}`);
  try {
    await setDoc(docRef,newCode,{merge:true});
    
  } catch (error) {
    console.log(error)
  }
}


  return (
    <>
    <div>
    {/* <button className='btn btn-primary' onClick={fetch}>get doc</button>
    <button className='btn btn-primary' onClick={upload}>Create doc</button> */}
    {/* <button className='btn btn-primary' onClick={upload}>Save</button>*/}
    
    </div>
      
    </>
  )
}

export default Store