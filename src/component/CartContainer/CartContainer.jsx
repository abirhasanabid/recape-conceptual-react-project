import PropTypes from 'prop-types';
import './CartContainer.css'
import CartsUi from '../CartsUi/CartsUi';
import AboutUi from '../AboutUi/AboutUi';

const CartContainer = ({ handleToggleBtn, isActive }) => {
    return (
        <div>
            <h1 className="text-5xl">Cart Container</h1>
            <button onClick={() => handleToggleBtn('cart')} className={`text-2xl font-bold p-2 ${isActive.cart && 'active'}`}>Cart</button>
            <button onClick={() => handleToggleBtn('about')} className={`ml-5 text-2xl font-bold p-2 ${isActive.cart || 'active'}`}>About</button>

            {
                isActive.cart ? <CartsUi></CartsUi> : <AboutUi></AboutUi>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleToggleBtn: PropTypes.func,
    isActive: PropTypes.object

};

export default CartContainer;