import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';

import { products } from '../data/products';

const ProductListPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewProduct = (product) => {
    window.location.href = `/thank-you?product=${product.name}`;
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewProduct={handleViewProduct}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {isModalOpen && (
        <AddToCartModal
          product={selectedProduct}
          onClose={handleModalClose}
          onConfirm={() => {
            console.log('Product added to cart!');
            handleModalClose();
          }}
        />
      )}
    </div>
  );
};

export default ProductListPage;
