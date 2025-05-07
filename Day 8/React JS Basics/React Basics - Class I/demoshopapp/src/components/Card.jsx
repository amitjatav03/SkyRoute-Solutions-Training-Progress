import './Card.css'

function Card(props) {
    console.log(props.children)
    return <div className='card'>
        {props.children}
    </div>
}

export default Card