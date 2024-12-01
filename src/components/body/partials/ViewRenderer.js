import {useState,useEffect} from 'react'
//Render Props Component for api data retrieval//
export const ViewRenderer = ({render, model}) =>{
    const [data, setData] = useState([])
    const loadData = () => {
        const ws = new WebSocket('wss://jessepiccione.info')
        ws.onopen = () => {
            console.info(`Connected to WebSocket - retrieving data for ${model}`)
            ws.send(model)
        }
        ws.onmessage = (event) => {
            setData(JSON.parse(event.data))
            ws.close()
        }
    }//eslint-disable-next-line  
    useEffect(()=>loadData(),[])
    return render(data)
}
export default ViewRenderer