const iframe = props => {
    return (
        <div className='ratio ratio-16x9'>
            <div className='position-absolute col-12 placeholder placeholder-wave rounded'></div>
            <iframe 
                allowFullScreen
                src={props.URL}
                title="YouTube Video"
                frameborder="0"
                className='embed-responsive-item rounded shadow-sm' 
                allow="accelerometer: autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    )
}
export default iframe
