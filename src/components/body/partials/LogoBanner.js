export default props => (
    <img 
        src='static/img/banner-logo-white.png'
        className={`img img-fluid col-12 col-md-11 col-lg-10 ${props.className}`}
        style={{...props.style}} 
    />
)