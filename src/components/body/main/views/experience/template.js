import HeaderTwo from '../../../partials/headerTwo'
import ListGroup from '../../../partials/ListGroup'
import ListGroupItem from '../../../partials/listGroupItem'
import Card from '../../../partials/Card'
import Col from '../../../partials/Col'
const temp = (obj) => (
    <Col key={obj.title_held}>
        <Card>
            <HeaderTwo title={obj.title_held}/>
            <ListGroup>
                <ListGroupItem text={`${obj.company_name} - ${obj.location}`}/>
                <ListGroupItem text={`${obj.start_date} - ${obj.end_date}`}/>
                <ListGroupItem text={`${obj.description}`}/>
            </ListGroup>
        </Card>
    </Col>
)// eslint-disable-next-line
export default ({data})=> data.map(temp)