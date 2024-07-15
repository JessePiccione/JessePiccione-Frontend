import NavList from './NavList.js'
function Nav(props){
    return (
            <div className='container-fluid sticky-top m-0 p-0'>
                <nav className='navbar navbar-expand-lg primary-color bg-gradient shadow-sm' data-bs-theme='dark'>
                    <div className='container-fluid m-0'>
                        <a className='navbar-brand mx-3' href="">JessePiccione.info</a>
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
                            <NavList setView={props.setView} />
                        </div>
                    </div>
                </nav>
            </div> 
    );
};
export default Nav;