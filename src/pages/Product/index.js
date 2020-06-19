import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  ColumnContainer,
  ProductInfo,
  Image,
  AddToCart
} from './styles';
import Footer from '../../components/Footer';

export default function Product() {
  const [product, setProduct] = useState([]);

  const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
    (sumAmount[product.id] = product.amount);

    return sumAmount;
  }, {}));

  const { id } = useParams();

  const dispatch = useDispatch();

  let history = useHistory();

  useEffect(() => {
    // Get ID from URL
    async function loadProduct() {
      await api.get(`products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadProduct();
  },[id, product.price]);



  function handleAddProducts(id) {
    dispatch(CartActions.addToCartRequest(id));
    history.push('/cart');
  };

  return (
    <>
    <Container>
      <ColumnContainer>
        <ProductInfo>
          <div>
            <h2>About the {product.title}</h2>
            <p>{product.description}</p>
          </div>

          <div>
            <strong>Fiber Content: </strong><p>{product.content}</p>
            <strong>Approx. Length: </strong><p>{product.length}</p>
            <strong>Diameter: </strong><p>{product.diameter}</p>
            <strong>Ply: </strong><p>{product.ply}</p>
            <strong>Dimensions: </strong><p>{product.dimension}</p>
            <strong>Weight: </strong><p>{product.weight}</p>
            <strong>Origin: </strong><p>{product.origin}</p>
          </div>

          <div>
            <strong>Recommended Skill Level</strong>
            <p>{product.level}</p>
            <p>{product.commentlevel}</p>
          </div>
        </ProductInfo>

        <Image src={product.image} alt={product.title}/>

        <AddToCart>
          <h2>{product.title}</h2>
          <p>€ {product.price}</p>

          <button className="btn" type="button" onClick={() => handleAddProducts(product.id)}>
              <div>
                <MdShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>
            Add to Cart
          </button>
        </AddToCart>
      </ColumnContainer>
    </Container>
    <Footer />
    </>
  )
};
