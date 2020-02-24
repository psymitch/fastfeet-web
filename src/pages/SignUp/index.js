import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('Senha obrigatória')
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubimit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubimit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="e-mail" />
        <Input name="password" type="password" placeholder="senha" />
        <button type="submit">cadastrar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
