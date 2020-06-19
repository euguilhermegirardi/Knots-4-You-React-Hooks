import React, { useState, useEffect } from 'react';

import {
  Container,
  MacrameHistory
} from './styles';
import macrame from '../../assets/History/macrame-history.jpg';
import macrame2 from '../../assets/History/macrame-history2.jpg';
import api from '../../services/api';
import Footer from '../../components/Footer';

export default function About() {
  const [text, setText] = useState([]);

  useEffect(() => {
    async function loadData() {
      api.get('history')
        .then(response => {
          setText(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    loadData();
  },[]);

  return (
    <>
      <Container>
        <MacrameHistory>

          {text.map(txt => (
            <li key={txt.key}>
              <h2>{txt.header}</h2>
              <p>{txt.firsttext}</p>
              <p>{txt.secondtext}</p>
              <img src={macrame} alt="Macrame.jpg"/>
              <p>{txt.thirdtext}</p>
              <img src={macrame2} alt="Macrame.jpg"/>
              <p>{txt.fourthtext}</p>
              <small>Reference: {txt.ref}</small>
              <small>Reference:  {txt.reftwo}</small>
            </li>
          ))}

        </MacrameHistory>
      </Container>
      <Footer />
    </>
  )
};
