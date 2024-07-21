import {Link} from 'react-router-dom'
function NavItem(props){
    return (
    <li key={props.i}
        className='nav-item'>
        <Link
        to={`/${(props.name==='Home')?"":props.name.toLowerCase()}`}
        className='nav-link'>
            <span>
                {props.name}
            </span>
        </Link>
    </li>);
}
export default NavItem;