import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://honey-badgers-ecommerce.glitch.me/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  const handleFavoriteClick = (id) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, favorite: !product.favorite };
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  };
  console.log(products)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {products.map(product => (
        <div key={product.id} style={{ width: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px', overflow: 'hidden' }}>
          <div style={{ position: 'relative' }}>
            <img src={product.imageUrl} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} alt="product" />
            <button onClick={() => handleFavoriteClick(product.id)} style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'transparent', border: 'none' }}>
              <FontAwesomeIcon icon={faHeart} style={{ color: product.favorite ? 'red' : 'gray' }} />
            </button>
          </div>
          <div style={{ padding: '16px' }}>
            <h5 style={{ marginBottom: '8px' }}>{product.name}</h5>
            <h5 style={{ marginBottom: '8px' }}>{product.price} TL</h5>
            <p style={{ marginBottom: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.description}</p>
            <p style={{ 
  marginBottom: '8px', 
  display: '-webkit-box', 
  WebkitBoxOrient: 'vertical', 
  overflow: 'hidden', 
  textOverflow: 'ellipsis', 
  fontStyle: 'italic',
  opacity: '0.7',
}}>
  {product.shippingMethod}
</p>
                    </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
