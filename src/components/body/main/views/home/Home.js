import {Url} from '../../../../../providers/api/APIUrlProvider'
import PlaceHolder from '../placeholder/PlaceHolder'
import Error from '../error/Error'
import template from './template'
import ViewRenderer from '../viewRenderer/ViewRenderer'
const Home = () => {
    const {url} = Url()
    return (
        <ViewRenderer 
            url={url+'api/home/'}
            render = {(data)=>{return (
                data.length?
                    (!data[0].message?       
                        (<div className='row transitionIn justify-content-md-center'>
                            { data.map(template) }
                        </div>):<Error message={data[0].message}/>
                    ):(<PlaceHolder/>)
            )}}
        />
    )
}
export default Home