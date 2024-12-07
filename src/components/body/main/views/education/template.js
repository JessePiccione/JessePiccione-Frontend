import Col from '../../../partials/Col'
import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroup from '../../../partials/ListGroup'
import ListGroupItem from '../../../partials/listGroupItem'
export const temp = (item)=> (
    <Col key={item.degree_type}>
        <Card>
            <HeaderTwo title={item.degree_type}/>
            <ListGroup>
                <ListGroupItem text={item.school_name}/>
                <ListGroupItem text={item.location}/>
                <ListGroupItem text={`${item.start_date} - ${item.end_date}`}/>
            </ListGroup>
        </Card>
    </Col>
)// eslint-disable-next-line
export default ({data}) => data.map(temp)

