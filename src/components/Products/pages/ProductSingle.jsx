
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductSingle.css";
function ProductSingle() {
  const params = useParams();
  const products = useSelector(state => state.products.list);
  const product = products.find((product) => {
    return (product.id === params.id);
  });
  console.log(products,product);
  return (
    <div className="product-single wrapper feature">
      {product && <div key={product.id} className="product-container">
        <div className="product-single-image">
          <img src={product.fields.image[0].url} alt={product.fields.name} />
        </div>
        <div className="product-content">
          <div className="wrapper-content">
            <h3 className="product-title">
              {product.fields.name}
            </h3>
            <p className="product-desc">{product.fields.decription}</p>
            <p className="product-price">{product.fields.price}$</p>
            <div className="product-colors">
              { product.fields.colors.map((item, index) =>(
                <div className={`product-color `} style={{background: `${item}` }}></div>
              ) )}
            </div>
          </div>
          <div className="product-handle">
            <button className="btn-buy btn" data-id={product.id}>
              Buy
            </button>
          </div>
        </div>
      </div>}
    </div>
    // <></>
  );
}

export default ProductSingle;
