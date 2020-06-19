import React from 'react';
import { useForm } from "react-hook-form";

import Footer from '../../components/Footer';
import {
  Container,
  Form
} from './styles';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {console.log(data);};

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="header">
            <div className="header__name">
              <label htmlFor="firstName">*Name</label>
              {errors.lastName && <span>A name is required</span>}
              <input name="firstName" ref={register({ required: true, minLength: 2, maxLength: 20 })} />
            </div>
            <div className="header__name">
              <label htmlFor="lastName">*Last Name</label>
              {errors.lastName && <span>Last name is required</span>}
              <input name="lastName" ref={register({ required: true, minLength: 2, maxLength: 20 })} />
            </div>
          </div>


          <label htmlFor="email">*Email</label>
          {errors.email && <span>An email is required</span>}
          <input type="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />

          <label htmlFor="subject">*Subject</label>
          {errors.subject && <span>The subject is required</span>}
          <input name="subject" ref={register({ required: true })} />

          <label htmlFor="comment">*Comment</label>
          {errors.comment && <span>A comment is required!</span>}
          <textarea name="comment" cols="30" rows="15" ref={register({ required: true })}></textarea>

          <button type="submit">Submit</button>
        </Form>
      </Container>
      <Footer />
    </>
  )
};
