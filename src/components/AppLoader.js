//react
import React, {useEffect, useState} from 'react'
//providers
import APIUrlProvider from '../providers/api/APIUrlProvider.js'
//components
import VantaBackground from './vanta/VantaBackground.js'
import Assistant from './body/assistant/Assistant.js'
import Header from './body/header/Header.js'
import Main from './body/main/Main.js'
import Footer from './body/footer/Footer.js'
import Card from './body/partials/Card.js'
import HeaderTwo from './body/partials/headerTwo.js'
function AppLoader() {
  const [loadingState, setLoadingState] = useState({loading:true,error:null});
  const wakeUpCall = async () =>{
    try{
      const request = await fetch('https://REDACTED_URL_PLACEHOLDER/')//'https://literate-space-enigma-6wq4rw6577rfrr4j-8080.app.github.dev/'
      await request.text()
    }
    catch (error) {
      setLoadingState({...loadingState, error:error})
    }
    finally{
      await new Promise(resolve=> setTimeout(resolve, 500))
      setLoadingState({...loadingState, loading:false})
    }
  }//eslint-disable-next-line 
  useEffect(()=>{wakeUpCall()},[])
  return(loadingState.loading || loadingState.error)?(
    <div className='row app'>
      <div className="col-12 d-flex primary-color bg-gradient" style={{height:'100vh'}}>
        <div className='col-10 col-xxl-6 m-auto'>
          <Card>
            <HeaderTwo title={(loadingState.error)?loadingState.error.message:'Initiating Backend Services...'}/>
            <img className='img-fluid m-auto rounded-profile rotate' style={{
              minHeight:'250px',
              minWidth:'250px'
            }} alt='' src = 'static/img/resume_site_profile.jpg'/>
          </Card>
        </div>
      </div>
    </div>
  ):(
    <div className="App">
      <VantaBackground/>
      <APIUrlProvider>
        <Header/>
        <Main/>
        <Assistant/>
        <Footer/>
      </APIUrlProvider>
    </div>
  )
}
export default AppLoader