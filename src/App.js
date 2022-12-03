
import { Route,Routes  } from 'react-router-dom';
import './App.css';
import Product from './components/Products/Product';
import NotFound from './components/Common/NotFound';
import ProductSingle from './components/Products/pages/ProductSingle';
import Navbar from './components/Navbar/Navbar';
import ProductHome from './components/Products/ProductHome';
import Cart from './components/Cart/Cart.jsx';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

import {getProductApi} from './api/products'
import {getProducts} from './redux/product/actions'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect( ()=>{
    
    const getInitProduct= async () =>{
      const data = await getProductApi();
      dispatch(getProducts(data));
    }
    getInitProduct();
  },[]);
  
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ProductHome/>}/>
        <Route path='/products/:id' element={<ProductSingle/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
