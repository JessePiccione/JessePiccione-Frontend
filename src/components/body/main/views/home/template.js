import HeaderTwo from '../../../partials/headerTwo.js'
import TextCard from '../../../partials/textCard.js'
import Iframe from '../../../partials/iframe.js'
import Card from '../../../partials/Card.js'
import HiddenTechnologyList from './HiddenTechnologyList.js'
export const homeTemplate = (obj) => {
    return (
        <div key={obj.title} className='col-12 col-xxl-6 pt-3 d-flex flex-column justify-content-start'>
            <Card> 
                <HeaderTwo title={obj.title}/>
                <TextCard text={obj.description}/>
                <HiddenTechnologyList id={obj.id} technology={obj.technologies} buttonText={'Technology Used Here...'}/>
                <Iframe URL={obj.URL}/>
            </Card>
        </div>
    )
}
export default homeTemplate;