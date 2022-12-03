
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectItemsCart, totalCart } from "../../redux/cart";
import "./Cart.css";
import { deleteProduct, setProduct } from '../../redux/cart/actions'

function Cart() {
  const cart = useSelector(selectItemsCart);
  const total = useSelector(totalCart);
  const dispatch = useDispatch();

  const handleSetAmount = (product, dir) => {
    if (dir === 'plus') {
      dispatch(setProduct({ id: product.id }));
    } else {
      if (product.amount - 1 === 0) {
        handleDeleteItemCart(product.id);
      } else {
        dispatch(setProduct({ id: product.id, dir }));
      }
    }

  }
  const handleDeleteItemCart = (id) => {

    dispatch(deleteProduct({ id }));
  }
  return (
    <div className="cart feature wrapper">
      <h3 className="title-products">Your Cart</h3>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <div className="item-image">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
            <div className="item-content">
              <h3 className="item-title">{product.name}</h3>
              <p className="item-price">
                {(product.price)}$
              </p>
              <div className="item-amount">
                <p>Amount: {product.amount}</p>
                <div
                  onClick={() => handleSetAmount(product, "plus")}
                  className="btn-amount increase-amount"><i className="fa-sharp fa-solid fa-plus"></i></div>
                <div
                  onClick={() => handleSetAmount(product, "minus")}
                  className="btn-amount decrease-amount"><i className="fa-sharp fa-solid fa-minus"></i></div>
              </div>
            </div>
            <div className="item-handle">
              <button
                onClick={() => handleDeleteItemCart(product.id)}
                className="btn-buy btn" data-id={product.id}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h4 className="">
          Total : {total}$
        </h4>
        <div className="cart-pay">
          <button className="btn cart-payment">Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
