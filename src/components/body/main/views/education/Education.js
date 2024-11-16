import {useState, useEffect} from 'react'
import {Url} from '../../../../../providers/api/APIUrlProvider'
import PlaceHolder from '../placeholder/PlaceHolder'
import Error from '../error/Error'
import api from './api'
import template from './template'
function Education(){   
    const {url} = Url()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const loadData = async () =>{    
        try { setData(await api(url)) }
        catch (error){ setError(error) }
        finally { 
            setAnimation(true)
            await new Promise(resolve => setTimeout(resolve, 1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{loadData()},[])
    return (loading || data)? 
        (loading?<PlaceHolder className={(animation)?'transitionOut':''}/>:
        <div className='row transitionIn justify-content-xl-center'>
            {data.map(template)}
        </div>
    ):(<Error message={error.message}/>)
}
export default Education;