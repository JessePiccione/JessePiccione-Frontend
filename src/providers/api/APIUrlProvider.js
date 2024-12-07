import {useState, createContext, useContext} from 'react'
const APIUrlContext = createContext();
const APIUrlProvider = ({children}) =>{
    //eslint-disable-next-line
    const [context, setContext] = useState({
        url:process.env.REACT_APP_BACKEND_API_URL,
        token:process.env.REACT_APP_BACKEND_API_TOKEN
    })
    return (   
        <APIUrlContext.Provider value={context}>
            {children}
        </APIUrlContext.Provider>
    )
}
export const Url = () => useContext(APIUrlContext)
export default APIUrlProvider