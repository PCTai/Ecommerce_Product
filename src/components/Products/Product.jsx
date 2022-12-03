import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/cart/actions';
function Product() {
    const products = useSelector(state => state.products.list);
    const dispatch = useDispatch();
    console.log(products);
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
        <div className='products wrapper'>
            <h3 className='title-products'>List product</h3>
            <div className="list-product">
                {products.length >0 ? products.map((product, index) =>(
                    <div key={index} className="product-item">
                        <div className='product-image'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.fields.image[0].url} alt={product.name}/>
                            </Link>
                            
                        </div>
                        <div className='product-content'>
                            <h3 className='product-title'>{product.fields.name}</h3>
                            <span className='product-price'>{(product.fields.price/100).toFixed()}$</span>
                        </div>
                        <div className='product-handle'>
                            <button onClick={() =>{addItemToCart(product)}} className='btn-buy btn' data-id={product.id}>Buy</button>
                        </div>
                        
                    </div>
                )): <div className='loading'></div>}
            </div>
            
        </div>
    )
}

export default Product
