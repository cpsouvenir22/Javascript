import {useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';


const Main = props => {
    const [products,setProducts] = useState (false);

    useEffect(() => {
        Axios.get("http://localhost:8000/Products")
            .then (res => setProducts(res.data.results))
            .catch(err => console.log(err))
    },[])

    const handleDestroyProduct = id => {
        Axios.delete(`http://localhost:8000/Products/${id}`)
            .then( res => setProducts(res.data.results))
            .catch (err => console.log(err))

    }

    return(

        products ?
            <table className="table table-bordered container-fluid">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((p,i) => {
                            return <tr key ={i}>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                        <td>{p.description}</td>
                                        <td class="d-flex justify-content-sm-between">
                                        <Link to= {`/show/${p._id}`} className= "btn btn-success">View Product</Link>
                                        <Link to= {`/edit/${p._id}`} className= "btn btn-primary btn-outline-dark"  >Edit</Link>
                                        <button onClick={()=> handleDestroyProduct(p._id)}>I don't NEED this</button>
                                        </td>
                                            

                                        
                            </tr>
                        })
                    }
                </tbody>
            </table> :
            <h2>Loading</h2>
    )
}

export default Main;