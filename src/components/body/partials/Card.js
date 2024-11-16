function Card({children}){
    return (
        <div className={`card bg-white bg-gradient bg-opacity-75 border-0 shadow-sm`} style={{minHeight:"100%"}}>
            <div className='card-body d-flex flex-column'>
                {children}
            </div>
        </div>
    );
}
export default Card;