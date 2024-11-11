import {useState, createContext, useContext} from 'react'
const APIUrlContext = createContext();
const URL = process.env.REACT_APP_BACKEND_API_URL
const TOKEN = process.end.REACT_APP_BACKEND_API_TOKEN
const APIUrlProvider = ({children}) =>{
    const [context, setContext] = useState({
        token:TOKEN,
        url:URL
    })
    return (   
        <APIUrlContext.Provider value={context}>
            {children}
        </APIUrlContext.Provider>
    )
}
export const Url = () => useContext(APIUrlContext)
export default APIUrlProvider