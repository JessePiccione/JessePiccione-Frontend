//react
import React, {useState, useEffect} from 'react'
//providers
import {Url} from '../../../providers/api/APIUrlProvider.js'
//components
import AssistantMessageBox from './assistantMessageBox.js'
const Assistant = () =>{
    const {url,token} = Url()
    const [data, setData] = useState([<AssistantMessageBox key='placeholder' assistant={true} placeholder={true}/>])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('Give a welcome message to the jessepiccione.info web application')
    const messageRows = document.getElementById('assistantMessageRows')
    useEffect(()=>{
            const messageAssistant = async () =>{
                if(message) try{
                    const temp = data
                    const m = message
                    setMessage(message=>null)
                    const request = await fetch(url+'assistant/message',{
                        method:'POST',
                        headers:{
                            'Authorization':`Token ${token}`
                        },
                        body:JSON.stringify({message:m}),
                        credentials:'include'
                    })
                    const response = await request.json()
                    temp.pop()
                    temp.push(<AssistantMessageBox key={response.time} assistant={true} message={response.message}/>)
                    setData(temp=>temp)
                }
                catch(error){
                    setError(error)
                    console.log(error)
                }
                finally {
                    setLoading(false)
                }
            }
            messageAssistant();
    },[message,data,token,url])
    useEffect(()=>{if(messageRows) messageRows.scrollTop = messageRows.scrollHeight})
    return (
        <div className="container-fluid text-light sticky-bottom my-2">
            <div className='container d-flex justify-content-end'>
                <div className='col-12 col-sm-7 col-md-6 col-lg-5 col-xl-4' style={{zIndex:1020}}>
                    <div className='accordion' id='accordianAssistant'  data-bs-theme='dark'>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed primary-color bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                                    <img src='static/img/banner-logo-light.png' alt='JessePiccione.info' style={{
                                        maxHeight:'24px'
                                    }}/>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                                <div className="accordion-body bg-white m-0 p-0" data-bs-theme='light'>
                                    <div id='assistantMessageRows' style={{maxHeight:'75vh',overflowY:'scroll',overflowX:'hidden', scrollTop:'100%'}} data-bs-theme='light'>
                                        {data}
                                    </div>
                                    <hr/>
                                    <form className='row d-flex justify-content-center' data-bs-theme='light' id='assistantForm' onSubmit={(event)=>{
                                        event.preventDefault()
                                        let temp = data;
                                        const m = document.getElementById('assistantMessage')
                                        if(!loading){
                                            setMessage(m.value)
                                            temp.push(<AssistantMessageBox key={Date.now().toString()} message={m.value}/>)
                                            temp.push(<AssistantMessageBox key='placeholder' assistant={true} placeholder={true}/>)
                                            setData(temp)
                                            setLoading(true)
                                            messageRows.scrollTop = messageRows.scrollHeight
                                        }
                                        m.value = ''
                                    }}>
                                        <div className='d-flex text-start col-10 mb-3'>
                                            <input id='assistantMessage' type='text' className='form-control mx-2' placeholder='Ask a Question...'/>
                                            <button className='btn btn-dark primary-color btn-gradient' type='submit' data-bs-theme='dark'>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Assistant
