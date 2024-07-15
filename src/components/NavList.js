import Home from './Home.js'
import Experience from './Experience.js'
import Education from './Education.js'
import Projects from './Projects.js'
import Skills from './Skills.js'
import Awards from './Awards.js'
import NavItem from './NavItem.js'
const views = [<Home/>,<Experience/>,<Education/>,<Projects/>,<Skills/>,<Awards/>]
const viewNames = ['Home','Experience', 'Education', 'Projects', 'Skills', 'Awards']

function NavList(props){
    return (
        <ul className="navbar-nav me-auto align-self-bottom">
            {views.map((val,index)=> {
                let i = index;
                return ( 
                    <NavItem key={viewNames[i]+i} name={viewNames[i]} val={val} i={i} setView={props.setView}/>
                );
            })}
        </ul>
    );
};
export default NavList;