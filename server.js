const React = require('react')
const express = require('express')
const path = require('path')
const fs = require('fs')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom/server')
const App = require('./src/App').default
const PORT = process.env.PORT || 8000
const app = express()
app.use(express.static(path.join(__dirname,'../build/'), {index:false}));
app.get('*', function(req,res){
    const appHtml = renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    )
    const file = path.resolve(__dirname, '../build', 'index.html')
    fs.readFile(file, 'utf8',(err, data)=>{
        if(err) {
            res.status(500).send(err)
            console.error(err)
            return
        }
        const html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        res.send(html)
    })
})
app.listen(PORT,()=>{
    console.log(`Starting React SSR Application listening: ${PORT} CTRL-C`)
})