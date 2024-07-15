import React from 'react'
import Nav from './Nav.js'
import Home from './Home.js'
import HeaderTwo from './HeaderTwo.js'
import OffCanvasButton from './OffCanvasButton.js'
import Card from '../providers/Card.js'
import AnnoucementBanner from './AnnoucementBanner.js'
function Main(){
    const [view, setView] = React.useState(<Home/>)
    return (
        <div>
            <AnnoucementBanner/>   
            <Nav setView={setView}/>
            <main>
                <div className='container-fluid m-0 p-0 z-3' style={{minHeight:'70vh'}}> 
                     
                    <div id ="mainContentContainer" className='container-fluid'>
                        {view}
                    </div>
                    <div className="container-fluid">
                        <div className='row justify-content-md-center'>
                            <div className='col-12 col-xxl-6 pt-3'>
                                <Card>
                                    <HeaderTwo title='Leave a Message'/>
                                    <div className='shadow-sm rounded p-2'>
                                        <p className='card-text text-center'>
                                            Click the button below to open the Message Form.
                                        </p>
                                        <OffCanvasButton/>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        
    );
};
export default Main;