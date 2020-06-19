import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import api from '../../services/api';
import { Container, Products, Item } from './styles';
import Footer from '../../components/Footer';

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product
      }));

      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <>
    <Container>
      <Products>
        {products.map(product => (
          <NavLink key={product.id} to={`product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <small>€ {product.price}</small>
            </Item>
          </NavLink>
        ))}
      </Products>
    </Container>
    <Footer />
    </>
  )
};
