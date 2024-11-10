import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const template = (item)=>{
    return (
        <div key={item.degree_type} className='col-12 col-xxl-6 pt-3'>
            <Card>
                <HeaderTwo title={item.degree_type}/>
                <div className='col-12 bg-white rounded shadow-sm p-2'>
                    <ul className='list-group'>
                        <ListGroupItem text={item.school_name}/>
                        <ListGroupItem text={item.location}/>
                        <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
                    </ul>
                </div>
            </Card>
        </div>
    )
}
export default template;