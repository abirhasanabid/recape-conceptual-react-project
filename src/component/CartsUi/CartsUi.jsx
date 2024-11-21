import PropTypes from 'prop-types';
import SingleCardUi from '../SingleCardUi/SingleCardUi';

const CartsUi = ({ cardData,handleDeleteBtn }) => {
    return (
        <div className='grid md:grid-cols-1 gap-2 lg:grid-cols-2'>
            {
                cardData.map((cData,idx) => <SingleCardUi handleDeleteBtn={handleDeleteBtn} key={idx} cData={cData}></SingleCardUi>)
            }
        </div>
    );
};

CartsUi.propTypes = {
    cardData: PropTypes.array,
    handleDeleteBtn: PropTypes.func
};

export default CartsUi;