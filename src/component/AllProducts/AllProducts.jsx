import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({ handleBuyNowBtn }) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data.cartItems))
    }, [])

    return (
        <div className=''>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    products.map(p => <SingleProduct handleBuyNowBtn={handleBuyNowBtn} key={p.id} product={p}></SingleProduct>)
                }
            </div>
        </div>
    );
};

AllProducts.propTypes = {
    handleBuyNowBtn: PropTypes.func

};

export default AllProducts;