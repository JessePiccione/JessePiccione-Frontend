
import {useState,createContext,useEffect,useContext} from 'react'
const APIUrlContext = createContext();
const URL = 'https://REDACTED_URL_PLACEHOLDER/'
const TOKEN = 'REDACTED_TOKEN_PLACEHOLDER'
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
};
export const Url = () => useContext(APIUrlContext);
export default APIUrlProvider;