import NavList from '../nav/NavList'
import {Link} from 'react-router-dom'
const Footer = () =>(
    <footer className='container-fluid text-light primary-color bg-gradient'>
        <div className='container pt-3'>
            <nav className="navbar col-12 navbar-expand-md justify-content-start" data-bs-theme='dark'>
                <Link className='navbar-brand' to='/'>
                    <img src='static/img/banner-logo-light.png' style={{
                        maxHeight:'32px'
                    }}/>
                </Link>
                <NavList/>
            </nav>
            <hr className='text-white'/> 
            <div className='d-flex justify-content-between py-3 px-0'>
                <div className='my-0 ps-2' style={{overflow:'none'}}>
                    <p style={{fontSize:'0.90em'}} className='text-start'>Email: jessepiccione@gmail.com
                    <br/>Phone: 732-908-0037</p>
                </div>
                <div className='text-end m-0 px-2'>
                    <a href='https://www.linkedin.com/in/jesse-piccione'>
                        LinkedIn <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <br />
                    <a href='https://www.facebook.com/jesse.piccione'>
                        Facebook <i className='fa-brands fa-facebook'></i>
                    </a>
                    <br />
                    <a href='https://github.com/JessePiccione'>
                        Github <i className='fa-brands fa-github'></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)
export default Footer