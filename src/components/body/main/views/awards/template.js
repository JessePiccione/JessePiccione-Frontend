import Card from '../../../partials/Card'
import HeaderTwo from '../../../partials/headerTwo'
import ListGroupItem from '../../../partials/listGroupItem'
export const template = ({title, issuer, year, awards}) =>{
    return (
        <div className='col-12 col-xxl-6 pt-3'>
            <Card>
                <HeaderTwo title={((issuer)?`${issuer} - `:'')+(`${title}`)+((year)?` - ${year}`:'')}/>
                <div className='rounded shadow-sm p-2'>
                    <ul className='list-group'>
                        {awards.map((award)=><ListGroupItem key={award.title} name={award.title+award.year} text={`${award.title} - ${award.year}`}/>)}
                    </ul>
                </div>
            </Card>
        </div>
    )
}
export default template;