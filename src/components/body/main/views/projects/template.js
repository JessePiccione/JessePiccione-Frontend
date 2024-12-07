import Col from '../../../partials/Col'
import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroup from '../../../partials/ListGroup'
import ListGroupItem from '../../../partials/listGroupItem'
const temp = item => (
    <Col key={item.name}>
        <Card>
            <HeaderTwo title={item.name}/>
            <ListGroup>
                <ListGroupItem text={item.sponser}/>
                <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
                <ListGroupItem text={item.contribution}/>
            </ListGroup>
        </Card>
    </Col>
)
 // eslint-disable-next-line
export default ({data})=>data.map(temp)