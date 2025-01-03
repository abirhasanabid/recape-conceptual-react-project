import PropTypes from 'prop-types';

const SingleProduct = ({ product, handleBuyNowBtn }) => {

    const { name, price, image, description, categories } = product;

    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-6 p-2">
            <figure className=''>
                <img className='rounded-md w-[100%] h-[300px] object-cover'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body space-y-2 mt-6">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className='text-xl text-gray-700'>{description}</p>
                <p className='text-red-500 font-semibold'>{categories?.isElectronics ? 'Electronics' : 'Products'}</p>
                <p className='text-yellow-900'>${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuyNowBtn(product)} className="p-2 border bg-[#FF4E50] rounded-md text-white font-semibold">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product: PropTypes.object,
    handleBuyNowBtn: PropTypes.func
};

export default SingleProduct;