function Card(props){
    return <div style={{height:'100%'}} className='p-2 rounded border'>
        <img src={props.imageSrc} width='100%' alt='' />
        <div className='p-3'>
            <h4>{props.title}</h4>
            <h3 className='text-muted'>{props.description}</h3>
            <h2>{props.price}</h2>
        </div>
    </div>
}
export default Card;