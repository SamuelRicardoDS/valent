import { useState } from 'react';
import styled from 'styled-components';
import { api } from '../../services/api';

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

const NameAndPasswordContainer = styled.div`
  display: flex;
  width: 100%;
`;

const NameContainer = styled.div`
  flex: 1;
  margin-right: 5px;
`;

const PasswordContainer = styled.div`
  flex: 1;
  margin-left: 5px;
`;

const EmailContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const SignUpButton = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
`;

const SignUpButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SignUpForm = () => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value)
    } else if (name === 'password') {
      setPassword(value)
    } else if (name === 'email') {
      setEmail(value)
    }
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`name: ${name}, password: ${password}, email:${email}`)
    const data = {
      name,
      password,
      email
    }
    api.post('/user/sign-up', data)
    .then((response) => {
      console.log(response)
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  }
  return (
    <div>
      <SignUpFormContainer onSubmit={handleSignUp}>
        <NameAndPasswordContainer>
          <NameContainer>
            <SignUpFormInput placeholder="Name" type="text" id="name" name="name" onChange={handleChange}/>
          </NameContainer>
          <PasswordContainer>
            <SignUpFormInput placeholder="Password" type="password" id="password" name="password" onChange={handleChange}/>
          </PasswordContainer>
        </NameAndPasswordContainer>
        <EmailContainer>
          <SignUpFormInput placeholder="Email" type="email" id="email" name="email" onChange={handleChange}/>
        </EmailContainer>
        <SignUpButtonContainer>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </SignUpButtonContainer>
      </SignUpFormContainer>
    </div>
  );
};