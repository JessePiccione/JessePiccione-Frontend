import PlaceHolder from "../main/views/placeholder/PlaceHolder"
import Error from "./Error"
import ViewRenderer from "./ViewRenderer"
//Higher Order Component to get a view given a path from the api//
const withTransition = ({Template,model}) => {
    return (
        <ViewRenderer
            render={(data)=>{ return (
                <div className='row transitionIn d-flex flex-row justify-content-center'> {                
                    data.length?        
                        (!data[0].message?<Template data={data}/>:
                            <Error message={data[0].message}/>):
                        (<PlaceHolder/>)
                        }
                </div>
            )}}
            model={model}
        />
    )
}
export default withTransition