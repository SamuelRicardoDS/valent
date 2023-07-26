import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const Logo = styled.h1`
  margin-left: 3rem;
  color: white;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 3rem;
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  font-size: xx-large;
`;

const Line = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
  width: 95%;
  height: 1px;
  background-color: white;
`;

export const Header = () => {
  
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }
  const handleLogin = () => {
    navigate('/user/sign-in')
  }
  return (
    <div>
      <HeaderContainer>
        <Logo>Valent</Logo>
        <NavigationContainer>
          <NavButton onClick={handleHome}>Home</NavButton>
          <NavButton onClick={handleLogin}>Login</NavButton>
        </NavigationContainer>
      </HeaderContainer>
      <Line />
    </div>
  );
};
