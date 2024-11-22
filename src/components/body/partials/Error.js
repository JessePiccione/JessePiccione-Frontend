import HeaderTwo from "./headerTwo";
export const Error = ({message}) =>{
    return (
        <div className='row transitionIn justify-content-md-center'>
            <div className='col-12 col-xxl-6 pt-3'>
                <div className='p-2 shadow-sm rounded d-flex flex-column justify-content-start' style={{'minHeight':'100%'}}>
                    <HeaderTwo title = {message} />
                </div>
            </div>
        </div>
    )
}
export default Error;