import './Modal.css';

const AddToCartModal = ({ product, onClose, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={onConfirm}>Confirm Add to Cart</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddToCartModal;
