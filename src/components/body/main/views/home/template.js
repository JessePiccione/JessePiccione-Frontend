import Col from "../../../partials/Col"
import Card from "../../../partials/Card"
import TextCard from "../../../partials/textCard"
import HeaderTwo from "../../../partials/headerTwo"
import HiddenTechnologyList from './HiddenTechnologyList'
import Iframe from '../../../partials/iframe'
const temp = (obj) => (
    <Col key={obj.title}>
        <Card> 
            <HeaderTwo title={obj.title}/>
            <TextCard text={obj.description}/>
            <HiddenTechnologyList id={obj.id} technology={obj.technologies} buttonText={'Technology Used Here...'}/>
            <Iframe URL={obj.URL}/>
        </Card>
    </Col>
)//eslint-disable-next-line
export default ({data})=>data.map(temp)