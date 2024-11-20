import PropTypes from 'prop-types';
import SingleCardUi from '../SingleCardUi/SingleCardUi';

const CartsUi = ({ cardData }) => {
    return (
        <div>
            {
                cardData.map(cData => <SingleCardUi key={cData.id} cData={cData}></SingleCardUi>)
            }
        </div>
    );
};

CartsUi.propTypes = {
    cardData: PropTypes.array
};

export default CartsUi;