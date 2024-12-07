import Col from '../../../partials/Col'
import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroup from '../../../partials/ListGroup'
import ListGroupItem from '../../../partials/listGroupItem'
export const temp = ({title, issuer, year, awards}) =>(
    <Col key={title}>
        <Card>
            <HeaderTwo title={((issuer)?`${issuer} - `:'')+(`${title}`)+((year)?` - ${year}`:'')}/>
            <ListGroup>
                {awards.map(({title, year})=><ListGroupItem key={`${title}_${year}`} name={title} text={`${title} - ${year}`}/>)}
            </ListGroup>
        </Card>
    </Col>
)// eslint-disable-next-line
export default ({data}) => data.map(temp)