const React = require('react')
const express = require('express')
const path = require('path')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom/server')
const App = require('./src/App').default
const PORT = process.env.PORT || 8000
const app = express()
app.use(express.static(path.resolve(__dirname,'build')))
app.get('*', (req,res)=>{
    const context = {}
    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const file = path.resolve('./build/index.html')
    res.sendFile(file, {headers:{'Content-Type':'text/html'}},(err)=>{
        if(err) res.status(500).send(err)
        else res.send(file.replace('<div id="root></div>',`<div id="root">${html}</div>`))
    })
})
app.listen(PORT,()=>{
    console.log(`Starting React SSR Application listening: ${PORT} CTRL-C`)
})