import {useState, useEffect} from 'react'
import {Url} from '../../../../../providers/api/APIUrlProvider'
import PlaceHolder from '../placeholder/PlaceHolder'
import Error from '../error/Error'
import api from './api'
import template from './template'
function Awards(){
    const {url} = Url()
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const fetchData = async () =>{
        try{ setData(await api(url)) }
        catch (error){ setError(error) }
        finally{
            setAnimation(true)
            await new Promise((resolve)=>setTimeout(resolve,1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{fetchData()},[])
    return (loading || data)?
    (loading?
        <PlaceHolder className={(animation)?'transitionOut':''} />:
        <div className='row transitionIn justify-content-md-center'>
            <div className='col-12 col-xxl-6 pt-3'>
                {data.map(template)}
            </div>
        </div>
    ):(<Error message={error.message}/>)
}
export default Awards;