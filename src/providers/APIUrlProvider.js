
import React from 'react'
const APIUrlContext = React.createContext();
const URL = 'https://REDACTED_URL_PLACEHOLDER/'
const TOKEN = 'REDACTED_TOKEN_PLACEHOLDER'
const APIUrlProvider = ({children}) =>{
    const [context, setContext] = React.useState({token:TOKEN, url:URL})
    return (   
        <APIUrlContext.Provider value={context}>
            {children}
        </APIUrlContext.Provider>
    )
};
export const Url = () => React.useContext(APIUrlContext);
export default APIUrlProvider;