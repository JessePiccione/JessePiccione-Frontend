import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const temp = ({title, issuer, year, awards}) =>{
    return (
        <div className='col-12 col-xxl-6 pt-3 d-flex flex-column justify-content-start'>
            <Card>
                <HeaderTwo title={((issuer)?`${issuer} - `:'')+(`${title}`)+((year)?` - ${year}`:'')}/>
                <div className='rounded shadow-sm p-2'>
                    <ul className='list-group'>
                        {awards.map(({title, year})=><ListGroupItem key={`${title}_${year}`} name={title} text={`${title} - ${year}`}/>)}
                    </ul>
                </div>
            </Card>
        </div>
    )
}//eslint-disable-next-line
export default ({data}) => data.map(temp)