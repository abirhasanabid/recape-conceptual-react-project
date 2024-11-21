import PropTypes from 'prop-types';

const SingleCardUi = ({ cData,handleDeleteBtn }) => {
    
    const { id, name, price, description, categories } = cData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-6">
            <div className="card-body">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className='text-xl text-gray-700'>{description}</p>
                <p className='text-red-500 font-semibold'>{categories?.isElectronics ? 'Electronics' : 'Products'}</p>
                <p className='text-yellow-900'>${price}</p>
                <button className='btn font-bold hover:text-white hover:bg-slate-800' onClick={()=>handleDeleteBtn(id)}>Delete</button>
            </div>
        </div>
    );
};

SingleCardUi.propTypes = {
    cData: PropTypes.object,
    handleDeleteBtn: PropTypes.func
};

export default SingleCardUi;