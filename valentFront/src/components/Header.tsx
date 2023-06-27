import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 0;
  top: 0;
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

const NavItem = styled.h1`
  color: white;
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
  return (
    <div>
      <HeaderContainer>
        <Logo>Valent</Logo>
        <NavigationContainer>
          <NavItem>Home</NavItem>
          <NavItem>Login</NavItem>
        </NavigationContainer>
      </HeaderContainer>
      <Line />
    </div>
  );
};
