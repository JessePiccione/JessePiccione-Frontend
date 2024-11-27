import React, {memo} from 'react'
import {Routes, Route} from 'react-router-dom'
import Nav from './nav/Nav.js'
import Home from './views/home/Home.js'
import Experience from './views/experience/Experience.js'
import Education from './views/education/Education.js'
import Projects from './views/projects/Projects.js'
import Skills from './views/skills/Skills.js'
import Awards from './views/awards/Awards.js'
import HeaderTwo from '../partials/headerTwo.js'
import OffCanvasButton from './OffCanvasButton.js'
import Card from '../partials/Card.js'
const Main = () => {
    return (
        <div>
            <Nav/>
            <main>
                <div className='container-fluid z-3 d-flex flex-column' style={{minHeight:'70vh'}}> 
                    <div id ="mainContentContainer" className='container-fluid col-12 col-xxl-10'>
                        <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/experience' element={<Experience/>}></Route>
                            <Route path='/education' element={<Education/>}></Route>
                            <Route path='/projects' element={<Projects/>}></Route>
                            <Route path='/skills' element={<Skills/>}></Route>
                            <Route path='/awards' element={<Awards/>}></Route>
                        </Routes>
                    </div>
                    <div className="container-fluid col-12 col-xxl-10">
                        <div className='row m-0 d-flex flex-row justify-content-center'>
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
    )
}
export default Main