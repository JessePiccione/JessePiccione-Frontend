function Footer(){
    return (
        <footer>
            <div className="m-0 p-0 container-fluid text-light">
                <div className='row primary-color bg-gradient m-0 py-3 px-0'>
                    <div className='col-6 text-start m-0' style={{overflow:'none'}}>
                        <p style={{fontSize:'0.90em'}}>Email: jessepiccione@gmail.com
                        <br />    
                        Phone: 732-908-0037</p>
                    </div>
                    <div className='col-6 text-end m-0 px-3'>
                        <a className='text-white text-decoration-none' href='https://www.linkedin.com/in/jesse-piccione'>
                            LinkedIn <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <br />
                        <a className='text-white text-decoration-none' href='https://www.facebook.com/jesse.piccione'>
                            Facebook <i className='fa-brands fa-facebook'></i>
                        </a>
                        <br />
                        <a className='text-white text-decoration-none' href='https://github.com/JessePiccione'>
                            Github <i className='fa-brands fa-github'></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;