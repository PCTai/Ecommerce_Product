import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css";
import Banner from '../Banner/Banner';
import {addProduct} from '../../redux/cart/actions'
import { useDispatch, useSelector } from 'react-redux';


function ProductHome() {
    const products = useSelector(state => state.products.list);
    const productFeature=products.slice(0,3);
    const dispatch = useDispatch();

    const addItemToCart =(product)=>{
        console.log(product);
        const id= product.id;
        const price= (product.fields.price/ 100 ).toFixed();
        const name = product.fields.name;
        const image = product.fields.image[0].url;
        const colors =product.fields.colors;
        dispatch(addProduct({
            id,
            price,name,image,
            colors
        }))
        
    }
    return (
        <>
            <Banner/>
            <div className='products wrapper'>
            
            <h3 className='title-products'>Reviews</h3>
            <div className="list-product">
                {productFeature.length >0 ? productFeature.map((product) =>(
                    <div key={product.id} className="product-item">
                        <div className='product-image'>
                            <Link to={`products/${product.id}`}>
                                <img src={product.fields.image[0].url} alt={product.name}/>
                            </Link>
                            
                        </div>
                        <div className='product-content'>
                            <h3 className='product-title'>{product.fields.name}</h3>
                            <span className='product-price'>{(product.fields.price/100).toFixed(2)}$</span>
                        </div>
                        <div className='product-handle'>
                            <button onClick={() =>addItemToCart(product)} className='btn-buy btn' data-id={product.id}>Buy</button>
                        </div>
                        
                    </div>
                )) :<div className='loading'></div>}
            </div>
            
        </div>
        </>
        
    )
}

export default ProductHome
