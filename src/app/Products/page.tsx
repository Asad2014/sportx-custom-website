
import React from 'react';

const Products = () => {
  const productData = [
    { id: 1, name: "FootBall", price: 2000, description: "Namclub Football", images: "/Namclub football.jpg" },
    { id: 2, name: "Badminton Racket", price: 7000, description: "Mizuno Racket", images: "/Mizuno racket.png" },
    { id: 3, name: "Cricket Bat", price: 2000, description: "CA Vision Cricket Bat", images: "/CA Vision Bat.jpg" },
    { id: 4, name: "Cricket Ball", price: 1600, description: "CA Vision Cricket Ball", images: "/CA Ball.jpg" },
    { id: 5, name: "Basket Ball", price: 10000, description: "Wilson BasketBall", images: "/Wilson Basketball.jpg" },
    { id: 6, name: "Hockey Stick", price: 5000, description: "Adidas Hockey Stick", images: "/Adidas Hockey Stick.jpg" },
  ];

  return (
    <div>
      <div className="products">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className='price'>Rs{product.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;



