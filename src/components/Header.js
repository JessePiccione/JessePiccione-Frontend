import React from 'react'
import OffCanvas from './OffCanvas.js'
import DelayedCharacters from './DelayedCharacters.js'
import AnnoucementBanner from './AnnoucementBanner.js'
function Header(){
    return(
        <header>
            <OffCanvas />
            <div className='container-fluid m-0 p-0 z-3'>
                <div className='row bg-black bg-gradient text-white m-0 p-0' style={{'--bs-bg-opacity':'0.85'}}>
                    <div className = 'col' >
                        <div className='text-center'>
                            <img className='rounded-profile m-3' style={{minHeight:'250px', minWidth:'250px'}} src="static/img/resume_site_profile.jpg" alt='round center profile'></img>
                            <h1>
                                <DelayedCharacters className='flip' word='Jesse Piccione'/>
                            </h1>
                            <h2>
                                <DelayedCharacters className='zip' word='Software Engineer'/>
                            </h2>
                        </div>
                        <div className='mb-3'>
                            <AnnoucementBanner title='Welcome to the React Side!'/>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
    );
};
export default Header;