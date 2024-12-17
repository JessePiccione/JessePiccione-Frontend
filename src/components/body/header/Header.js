import React from 'react'
import OffCanvas from './OffCanvas.js'
import DelayedCharacters from './DelayedCharacters.js'
import LogoBanner from '../partials/LogoBanner.js'
import HeaderTwo from '../partials/headerTwo.js'
import {Url} from '../../../providers/api/APIUrlProvider.js'
function Header(){
    const {url} = Url()
    return(
        <header className='container-fluid bg-black bg-gradient' style={{'--bs-bg-opacity':'0.75'}}>
            <OffCanvas />
            <div className='container'>
                <div className='row' >
                    <div className='col-12'>
                        <div className='card bg-black text-white text-center rounded border-0 shadow-sm'  style={{'--bs-bg-opacity':'0'}}>
                            <div className='card-body rounded border-0 m-3 shadow-sm d-flex flex-column'>
                                <LogoBanner className='m-auto'/>
                                <img className='rounded-circle m-auto' style={{maxHeight:'250px', maxWidth:'250px'}} src="static/img/resume_site_profile.jpg" alt='round center profile'></img>
                                <h1 className='card-text'>
                                    <DelayedCharacters className='flip' word='Jesse Piccione'/>
                                </h1>
                                <h2 className='card-text'>
                                    <DelayedCharacters className='zip' word='Software Engineer'/>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 my-2'>
                        <div className='card bg-black text-white rounded border-0 shadow-sm' style={{minHeight:"100%", '--bs-bg-opacity':'0'}}>
                            <div className='card-body d-flex flex-column justify-content-between'>
                                <HeaderTwo title='Version 2.5.0'/>
                                <div className='bg-opacity-0 border-0 shadow-sm' style={{minHeight:"100%"}}>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <p>
                                            A 4-Tier Advanced Resume Platform.
                                        <br/>
                                            Now utilizing WebSockets
                                        <br/>                    
                                        <a id='annoucement-link' className='card-text' href={url}>Original Django Application</a>
                                        </p>                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </header>
    );
};
export default Header;