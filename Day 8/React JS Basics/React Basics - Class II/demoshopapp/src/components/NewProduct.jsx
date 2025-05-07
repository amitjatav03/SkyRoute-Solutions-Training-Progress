import './NewProduct.css'
import ProductForm from './ProductForm'

function NewProduct(props) {

    function saveProduct(prod) {
        console.log("i am inside new product")
        console.log(prod)

        // calling parent function
        props.product(prod)
    }

    return (
        <div className='new-product'>
            <ProductForm onSaveProduct={saveProduct} />
        </div>
    )
}

export default NewProduct