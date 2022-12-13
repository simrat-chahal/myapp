import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Checkout from './app/Checkout';

import Home from './app/Home';
import OrderInfo from './app/OrderInfo';
import ProductList from './app/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productList" element={<ProductList />}>
        </Route>
        <Route path="checkout" element={<Checkout />}>
        </Route>
        <Route path="checkout/orderInfo" element={<OrderInfo />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App