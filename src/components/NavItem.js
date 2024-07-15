function NavItem(props){
    return (<li key={props.i}
        className='nav-item'>
        <a
        className='nav-link'  
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent"
        href='/'
        onClick={
            function(e){
                props.setView(props.val)
            }
        } 
        >{props.name}</a>
    </li>);
}
export default NavItem;