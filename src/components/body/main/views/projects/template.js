import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
const temp = item =>{ return (
        <div key={item.name} className='col-12 col-xxl-6 pt-3 d-flex flex-column justify-content-start'>
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
} // eslint-disable-next-line
export default ({data})=>data.map(temp)