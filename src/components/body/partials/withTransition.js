import PlaceHolder from "../main/views/placeholder/PlaceHolder"
import Error from "./Error"
import {Url} from "../../../providers/api/APIUrlProvider"
import ViewRenderer from "./ViewRenderer"
//Higher Order Component to get a view given a path from the api//
const withTransition = ({path,Template}) => {
    const {url} = Url()
    return (
        <ViewRenderer 
            url={`${url+path}`}
            render={(data)=>{
                return (
                    <div className='transitionIn'> {                
                        data.length?        
                            (!data[0].message?<Template data={data}/>:
                                <Error message={data[0].message}/>):
                            (<PlaceHolder/>)
                            }
                    </div>
                )
            }}
        />
    )
}
export default withTransition