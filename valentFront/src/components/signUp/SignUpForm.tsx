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
  return (
    <div>
      <SignUpFormContainer>
        <NameAndPasswordContainer>
          <NameContainer>
            <SignUpFormInput placeholder="Name" type="text" id="name" name="name" />
          </NameContainer>
          <PasswordContainer>
            <SignUpFormInput placeholder="Password" type="password" id="password" name="password" />
          </PasswordContainer>
        </NameAndPasswordContainer>
        <EmailContainer>
          <SignUpFormInput placeholder="Email" type="email" id="email" name="email" />
        </EmailContainer>
        <SignUpButtonContainer>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </SignUpButtonContainer>
      </SignUpFormContainer>
    </div>
  );
};