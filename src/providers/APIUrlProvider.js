
import React from 'react'
const APIUrlContext = React.createContext();
const URL = 'https://jessepiccione-info-backend.ue.r.appspot.com/'
const TOKEN = 'bf3e1997e0234db808e11de90cea5d5a974506cf'
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