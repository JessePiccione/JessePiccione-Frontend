const {hydrateRoot} = require('react-dom/client')
const App = require('../../../src/App')
function imThirsty(){
    hydrateRoot(
        document.querySelector('#root'),
        <App/>
    )
}
imThirsty();