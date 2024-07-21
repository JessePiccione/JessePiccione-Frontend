import Card from '../providers/Card'
import HeaderTwo from './HeaderTwo'
import {Url} from '../providers/APIUrlProvider'
const AnnoucementBanner = props => {
    const url = Url()
    return (
        <div className='row'>
            <div className='col-12'>
                <Card>
                    <HeaderTwo title={props.title}/>
                    <div className={`bg-opacity-0 border-0 shadow-sm`} style={{minHeight:"100%"}}>
                        <div className='d-flex flex-column justify-content-between'>
                            <p className='card-text'>Welcome to the Version 2 of JessePiccione.info.
                            <br/>
                            Now utilizing server side rendering with React.js
                            </p>
                            <a id='annoucement-link' href={url}>Original Django Application</a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default AnnoucementBanner