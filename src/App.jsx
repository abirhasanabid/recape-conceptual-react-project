import { useState } from 'react'
import './App.css'
import AllProducts from './component/AllProducts/AllProducts'
import CartContainer from './component/CartContainer/CartContainer'

function App() {

  const [isActive, setIsActive] =
    useState({ cart: true, status: 'cart' });

  const handleToggleBtn = (status) => {
    if (status === 'cart') {
      setIsActive({ cart: true, status: 'cart' });
    }
    else {
      setIsActive({ cart: false, status: 'about' });
    }
  };

  return (
    <div className='flex justify-around font-semibold'>

      <AllProducts></AllProducts>
      <CartContainer isActive={isActive} handleToggleBtn={handleToggleBtn}></CartContainer>
    </div>
  )
};

export default App;
