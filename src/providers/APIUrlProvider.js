
import React from 'react'
const APIUrlContext = React.createContext();
const URL = 'https://REDACTED_URL_PLACEHOLDER/'
const TOKEN = 'REDACTED_TOKEN_PLACEHOLDER'
const APIUrlProvider = ({children}) =>{
    const [token, setToken] = React.useState(TOKEN);
    const [url, setUrl] = React.useState(URL);
    return (   
        <APIUrlContext.Provider value={{url,token}}>
            {children}
        </APIUrlContext.Provider>
    )
};
export const Url = () => React.useContext(APIUrlContext);
export default APIUrlProvider;