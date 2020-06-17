import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import api from '../../services/api';

export default function Product() {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function loadProduct() {
      await api.get(`products/${id}`)
        .then(response => {
          // console.log(response.data);
          setProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        })
    };

    loadProduct();
  },[id]);



  return (
    <>
    <img src={product.image} alt={product.title}/>
    <p>{product.price}</p>
    <p>{product.title}</p>
    </>
  )
};
