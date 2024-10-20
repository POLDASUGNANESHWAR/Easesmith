import './ProductCard.css';

const ProductCard = ({ product, onViewProduct, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="button-group">
        <button onClick={() => onViewProduct(product)}>View Product</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
