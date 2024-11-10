import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const template  = (item) => { return (
    <div key={item.category_name} className='col-12 col-xxl-6 pt-3'>
        <div className='p-3 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
            <HeaderTwo title={item.category_name}/>
            <div className='p-2 rounded shadow-sm'>
                <ul className='list-group'>
                    {
                       item.skills.map((item)=>{
                            return <ListGroupItem key={item.name+item.name+''} name={item.name} text={item.name}/>
                        })
                    }
                </ul>    
            </div>    
        </div>
    </div>
)}
export default template;