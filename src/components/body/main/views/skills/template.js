import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const temp  = ({id, category_name, skills}) => { return (
    <div key={category_name} className='col-12 col-xxl-6 pt-3'>
        <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
            <HeaderTwo title={category_name}/>
            <div className='p-2 rounded shadow-sm'>
                <ul className='list-group'>
                    {skills.map(({name})=><ListGroupItem key={`${name}_${id}`} name={name} text={name}/>)}
                </ul>    
            </div>    
        </div>
    </div>
)}// eslint-disable-next-line
export default ({data})=>data.map(temp)