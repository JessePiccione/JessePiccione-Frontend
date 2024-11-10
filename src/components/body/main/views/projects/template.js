import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const template = item =>{ return (
        <div key={item.name} className='col-12 col-xxl-6 pt-3'>
            <Card>
                <HeaderTwo title={item.name}/>
                <div className='col-12 bg-white shadow-sm rounded p-2'>
                    <ul className='list-group'>
                        <ListGroupItem text={item.sponser}/>
                        <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
                        <ListGroupItem text={item.contribution}/>
                    </ul>
                </div>
            </Card>
        </div>
    )
}
export default template