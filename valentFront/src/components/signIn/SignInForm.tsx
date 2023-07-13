import styled from 'styled-components';

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
    return (
        <SignUpFormContainer>
            <SignUpFormInput placeholder="Email" />
            <SignUpFormInput placeholder="Password" />
            <SignInButton>Sign In</SignInButton>
        </SignUpFormContainer>
    )
}