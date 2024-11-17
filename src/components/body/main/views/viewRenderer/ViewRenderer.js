import {useState,useEffect} from 'react'

export const ViewRenderer = ({render, url}) =>{
    const [data, setData] = useState([])
    const loadData = async () =>{ 
        try{setData(await fetch(url,{credentials:"include"}).then(res=>res.json()))}
        catch(error){setData([error])}
    }//eslint-disable-next-line  
    useEffect(()=>{loadData()},[])
    return render(data)
}
export default ViewRenderer