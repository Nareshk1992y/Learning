/**
 * features that parcel delivers
 * Hot module reload(HMR)
 * File watcher algorithm - c++
 * BUNDLING
 * MINIFY
 * Cleaning our code(remove console.log)
 * Dev and production build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable for older version of browser(no need to write polyfills)
 * HTTPS on dev
 * port Number
 * consistant Hashing Algorithm
 * Zero config
 * Transitive Dependencies
 */

import React from "react"
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h1',{style: {color: "orange"}},
'Hello Galaxy')
const heading2 = React.createElement('h2',{style: {color: "lightblue"}},
'Hello Solar System')
const heading3 = React.createElement('h3',{style: {color: "red"}},
'Hello World')

const container = React.createElement('div', {id:"container"},
[heading1, heading2, heading3])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)