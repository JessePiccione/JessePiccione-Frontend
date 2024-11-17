const React = require('react')
const express = require('express')
const path = require('path')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom/server')
const App = require('./src/App')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.static(path.resolve(__dirname,'build')))
app.get('*', (req,res)=>{
    const context = {}
    const renderedString = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>JessePiccione.info</title>
        <link rel='icon' type="image/x-icon" href="static/img/favicon.ico">
        <link rel='apple-touch-icon' type='image/png' href="static/img/apple-touch-icon.png">
        <meta name="description" content='Jesse Piccione is a detial oriented software engineer. Jesse Piccione has a bachelor of science in computer science from oregon state university. Jesse Piccione created the jessepiccione.info eresume application and posted it to the google cloud. Jesse Picciones Favorite and most confident technoogies are the django framework, and the python programming language.'>
        <meta name='title' content='Jesse Piccione'>
        <meta name='author' content='Jesse Piccione'>
        <meta name='robots' content='follow'>
        <meta name="viewport" content='width=device-width, initial-scale=1.0'>
        <meta name='HandheldFriendly' content='true'>
        <meta name="language" content='english'>
        <meta name="rating" content='safe for kids'>
        <meta name='revised' content='5/5/2023'>
        <!-- open graph protocal -->
        <meta property='og:title' content='Jesse Piccione'>
        <meta property='og:type' content='website'>
        <meta property='og:url' content='https://jessepiccione.info'>
        <meta property='og:description' content='The JessePiccione.info eResume application is a cutting-edge Full-Stack web application developed by Jesse Piccione. This dynamic platform serves as a comprehensive digital representation of Jesses professional qualifications, experience, and skills in the field of Software Engineering. Powered by Django and Twilio, the eResume showcases Jesses expertise in Python, Django, Bootstrap, MySQL, GCP, Twilio, and the OpenAI Assistant API. The user-friendly interface provides easy access to Jesses resume information, allowing visitors to gain a clear understanding of his background and capabilities. By leveraging Django models and migrations framework, the website seamlessly interacts with a MySQL database to deliver a fluid and interactive user experience. Overall, the JessePiccione.info eResume application stands as a testament to Jesses proficiency as a Full-stack, Frontend, and Backend developer, demonstrating his ability to create innovative and functional web solutions using a diverse range of technologies. Visit the website to explore Jesse Picciones professional journey and expertise in the software engineering domain.'>
        <meta property='og:image' content="static/img/android-chrome-512x512.png">
        <meta property='og:locale' content='en_US'>
        <meta property='og:site_name' content='JessePiccione.info'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link href="static/css/Style.css" rel='stylesheet' >
    </head>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${renderedString}</div>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/4877586813.js" crossorigin="anonymous"></script>
    </html>
    `
    res.send(html)
})
app.listen(PORT,()=>{
    console.log(`Starting React SSR Application listening: ${PORT} CTRL-C`)
})