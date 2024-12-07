import Col from '../../../partials/Col'
import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroup from '../../../partials/ListGroup'
import ListGroupItem from '../../../partials/listGroupItem'
export const temp  = ({id, category_name, skills}) => (
    <Col key={category_name} >
        <Card>
            <HeaderTwo title={category_name}/>
            <ListGroup>
                {skills.map(({name})=><ListGroupItem key={`${name}_${id}`} name={name} text={name}/>)}
            </ListGroup>
        </Card>
    </Col>
)// eslint-disable-next-line
export default ({data})=>data.map(temp)