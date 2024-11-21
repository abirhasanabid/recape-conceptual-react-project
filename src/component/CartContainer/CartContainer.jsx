import PropTypes from 'prop-types';
import './CartContainer.css'
import CartsUi from '../CartsUi/CartsUi';
import AboutUi from '../AboutUi/AboutUi';

const CartContainer = ({ handleToggleBtn, isActive, cardData,handleDeleteBtn }) => {
    return (
        <div className='ml-4'>
            <div className="flex">
                <button onClick={() => handleToggleBtn('cart')} className={`text-2xl font-bold p-2 ${isActive.cart && 'active'}`}>Cart</button>
                <button onClick={() => handleToggleBtn('about')} className={`ml-5 text-2xl font-bold p-2 ${isActive.cart || 'active'}`}>About</button>
            </div>
            {
                isActive.cart ? <CartsUi handleDeleteBtn={handleDeleteBtn} cardData={cardData}></CartsUi> : <AboutUi></AboutUi>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleToggleBtn: PropTypes.func,
    handleDeleteBtn: PropTypes.func,
    isActive: PropTypes.object,
    cardData: PropTypes.array
};

export default CartContainer;