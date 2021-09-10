import {useState, useEffect} from 'react';
import Axios from 'axios';

const Show = props => {
    const [product, setProduct] = useState (false);

    useEffect (()=> {
        Axios.get(`http://localhost:8000/Products/${props.id}`)
            .then(res=> setProduct (res.data.results))
            .catch(err => console.log(err))
                
                
    }, [props])

    const handleDestroyProduct = id => {
        Axios.delete(`http://localhost:8000/Products/${id}`)
            .then( res => setProduct(res.data.results))
            .catch (err => console.log(err))

    }

    return (
        <div className="card col-4 mx-auto">
            <div className="card-body">
                <h2 className= "card-title">{product.title}</h2>
                <h4 className= "card-title">${product.price}</h4>
                <h4 className= "card-title">{product.description}</h4>
            </div>

            <button onClick={()=> handleDestroyProduct(product._id)}>I don't NEED this</button>
        </div>
        
    )
}

export default Show;