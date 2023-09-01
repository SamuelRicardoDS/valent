import styled from 'styled-components';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { useRelationship } from '../../context/RelationshipContext';


const SignUpFormContainer = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: auto;
  padding: 10px;
  bottom: 40%;
`;

const SignUpFormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin: 0px;
  padding: 5px 10px;
  box-sizing: border-box;
`;

const SignInButton = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #007bff;
`;

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }
  const navigate = useNavigate()
  const { setUserId } = useRelationship() 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
  
    try {
      const response = await api.post('/user/sign-in', data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log({token: response.data.token}); 

      try {
        const decodedToken = jwt_decode(token) as { userId: string };
        const userId = decodedToken.userId;
        console.log(userId);
        setUserId(userId)
        navigate(`/main/${userId}`);
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    } catch (error) {
      console.log(error); 
      alert('Invalid email or password');
    }
  };
    return (
        <SignUpFormContainer onSubmit={handleSubmit}>
            <SignUpFormInput placeholder="Email" name='email' onChange={handleChange}/>
            <SignUpFormInput placeholder="Password" name='password' onChange={handleChange}/>
            <SignInButton type='submit'>Sign In</SignInButton>
        </SignUpFormContainer>
    )
}