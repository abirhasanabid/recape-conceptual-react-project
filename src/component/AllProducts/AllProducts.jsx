import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data.cartItems))
    }, [])

    return (
        <div>
            <h1 className="text-5xl">All Products</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                products.map(p => <SingleProduct key={p.id} product={p}></SingleProduct>)
            }
            </div>
        </div>
    );
};

AllProducts.propTypes = {

};

export default AllProducts;