import NavList from './NavList.js'
import {Link} from 'react-router-dom'
function Nav(){
    return (
            <div className='container-fluid sticky-top m-0 p-0'>
                <nav className='navbar navbar-expand-lg primary-color bg-gradient shadow-sm' data-bs-theme='dark'>
                    <div className='container-fluid m-0'>
                        <Link className='navbar-brand mx-3' to='/'>JessePiccione.info</Link>
                        <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse' id ='navbarSupportedContent'>
                            <NavList/>
                        </div>
                    </div>
                </nav>
            </div> 
    );
};
export default Nav;