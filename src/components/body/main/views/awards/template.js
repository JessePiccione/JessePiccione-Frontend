export const AwardTemplate = (item) =><ListGroupItem  key={item.title+'-outer'} name={item.title} text={`${item.title} - ${item.year}`}/>
export default AwardTemplate