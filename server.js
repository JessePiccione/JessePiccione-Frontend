const express = require('express')
const Websocket = require('ws')
const http = require('http')
const path = require('path')
const fs = require('fs')

const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom/server')
const App = require('./src/App').default
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.static(path.join(__dirname,'../build/'), {index:false}));
/*///
All get requests directly to frontend 
create string version of app component using the render to string function
seeding in the url for router consistency 
///*/
app.get('*', function(req,res){
    const appHtml = renderToString(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    )
    const file = path.resolve(__dirname, '../build', 'index.html')
    fs.readFile(file, 'utf8',(err, data)=>{
        if(err) {
            console.error(err)
            res.status(500).send(err)
        }
        const html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        res.send(html)
    })
})
//creating http server 
const ROUTES = {
    'home':'api/home/',
    'experience':'api/work/experience/',
    'education':'api/education/',
    'projects':'api/project/',
    'skills':'api/skill/category/',
    'awards':'api/award/category/',
}
const server = http.createServer(app)
const wss = new Websocket.Server({ server })
wss.on('connection', (ws)=>{
    ws.on('message', async (data) => {
        const res = await fetch(process.env.REACT_APP_BACKEND_API_URL+ROUTES[data]).then(res=>res.json())
        ws.send(JSON.stringify(res))
    })
    ws.on('close',()=>{
        console.log("Connection closed")
    })
})
fetch(process.env.REACT_APP_BACKEND_API_URL+'api/')
server.listen(PORT, ()=> console.info(`Launching ${process.env.NODE_ENV} server listening on http://localhost:${PORT} press ctrl-c to stop...`))