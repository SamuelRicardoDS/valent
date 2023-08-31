import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeContentContainer = styled.div`
  display: flex;
  content: column-gap;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const PhraseContainer = styled.div`
`;

const Phrase = styled.p`
  margin: 0;
  font-size: 3lvi;
`;

const SignUpButton = styled.button`
  width: 7%;
  height: 5%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #787878;
  :hover{
    background-color: #454545;
  }
`;



export const HomeContent = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/user/sign-up')
  }
  return (
    <HomeContentContainer>
      <PhraseContainer>
        <Phrase>The Art</Phrase>
        <Phrase>of living a life</Phrase>
        <Phrase>in Two</Phrase>
      </PhraseContainer>
      <SignUpButton onClick={handleClick}>
        Sign Up 
      </SignUpButton>
    </HomeContentContainer>
  );
};