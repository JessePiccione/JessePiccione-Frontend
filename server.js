import express, { response } from 'express'
import { renderToString } from 'react-dom/server'
import App from './src/App'
const app = express()
app.use('/',(req,res)=>{
    const html = renderToString(<App/>) 
    res.send(html)
})