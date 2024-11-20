import { useState } from 'react'
import './App.css'
import AllProducts from './component/AllProducts/AllProducts'
import CartContainer from './component/CartContainer/CartContainer'
import Navber from './component/Navber/Navber';

function App() {

  // for toggle btn
  const [isActive, setIsActive] = useState({ cart: true, status: 'cart' });

  // for cart container
  const [cardData, setCardData] = useState([]);

  //  hendle bye now btn
  const handleBuyNowBtn = cardInfo => {
    const newCardData = [...cardData, cardInfo];
    setCardData(newCardData);
  }

  // toggle btn handler
  const handleToggleBtn = (status) => {
    if (status === 'cart') {
      setIsActive({ cart: true, status: 'cart' });
    }
    else {
      setIsActive({ cart: false, status: 'about' });
    }
  };

  return (
    <div className='container mx-auto'>
      <Navber cardData={cardData}></Navber>
      <div className='flex justify-between container mx-auto'>
        <AllProducts handleBuyNowBtn={handleBuyNowBtn}></AllProducts>
        <CartContainer cardData={cardData} isActive={isActive} handleToggleBtn={handleToggleBtn}></CartContainer>
      </div>
    </div>
  )
};

export default App;
