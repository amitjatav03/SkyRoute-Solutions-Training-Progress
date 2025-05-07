import './Item.css'


function Item(props) {
    const itemName = props.name;
    // console.log(props.children)
    return (
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}
        </div>
    )
}

export default Item
