//React
import React, {useState, useEffect} from 'react'
//Providers
import {Url} from '../../../../../providers/api/APIUrlProvider'
//Components
import PlaceHolder from '../placeholder/PlaceHolder'
import Error from '../error/Error'
//partials
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem' 
import Card from '../../../partials/Card'
//awardsAPI
import {loadAwards} from './api'
function Awards(){
    const {url} = Url()
    const [loading, setLoading] = useState(true)
    const [animation, setAnimation] = useState(false)
    const [error, setError] = useState(null)
    const [awards, setAwards] = useState(null)
    const fetchAwards = async () =>{
        try{
            setAwards(await loadAwards(url))
        }
        catch (error){
            setError(error)
        }
        finally{
            setAnimation(true)
            await new Promise((resolve)=>setTimeout(resolve,1000))
            setLoading(false)
        }
    }//eslint-disable-next-line 
    useEffect(()=>{fetchAwards()},[])
    return (loading ||awards)?(
        (loading)?<PlaceHolder className={(animation)?'transitionOut':''} />:
        <div className='row transitionIn justify-content-md-center'>
            <div className='col-12 col-xxl-6 pt-3'>
                <Card>
                    <HeaderTwo title='Awards & Certifications'/>
                    <div className='rounded shadow-sm p-2'>
                        <ul className='list-group'>
                            {
                                awards.map(item=><ListGroupItem  key={item.title+'-outer'} name={item.title} text={`${item.title} - ${item.year}`}/>)
                            }
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    ):(<Error message={error.message}/>)
}
export default Awards;