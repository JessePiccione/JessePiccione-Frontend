import HeaderTwo from '../../../partials/headerTwo.js'
import ListGroupItem from '../../../partials/listGroupItem.js'
import Card from '../../../partials/Card.js'
const temp = (obj) => {
    return (
        <div key={obj.title_held} className='col-12 col-xxl-6 pt-3 d-flex flex-column justify-content-start'>
            <Card>
                <HeaderTwo title={obj.title_held}/>
                <div className='rounded shadow-sm p-2'>
                    <ul className='list-group'>
                        <ListGroupItem text={`${obj.company_name} - ${obj.location}`}/>
                        <ListGroupItem text={`${obj.start_date} - ${obj.end_date}`}/>
                        <ListGroupItem text={`${obj.description}`}/>
                    </ul>
                </div>
            </Card>
        </div>
    )
}//eslint-disable-next-line
export default ({data})=> data.map(temp)