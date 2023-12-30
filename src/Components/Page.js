import React, { useEffect } from 'react'
import textContext from './Context';
import { useContext, useState } from 'react';

import './style.css'

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

      <div className='border border-1 my-1 mx-1 bg-light page'>
        <iframe className='' style={{width:"100%", height:"100%"}} srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
        ></iframe>
      </div>

    </>
  )
}
