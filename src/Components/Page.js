import React, { useEffect } from 'react'

//  import Allcontext from './Allcontext';
import textContext from './Context';
import { useContext, useState } from 'react';

export const Page = () => {
  const c = useContext(textContext);
  const { html, css, js,run } = c;
  const [srcDoc, setsrcDoc] = useState(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
    `
  )
  useEffect(() => {
    setTimeout(() => {
      setsrcDoc(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
  `)
    }, 1000);
  }, [html,css,run])


  return (
    <>

      <div className='border border-1 my-1 mx-1 bg-light' style={{ width: "47vw", height: "85vh" }}>
        <iframe className='w-100' style={{ height: "100%" }} srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
        ></iframe>
      </div>

    </>
  )
}
