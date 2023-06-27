import styled from 'styled-components';
import carpeMan from '../../assets/carpeMan.jpeg';

const CarpeManContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  justify-content: flex-end;  
  z-index: 1;
`;

export const CarpeManComponent = () => {
    return (
        <CarpeManContainer>
            <img src={carpeMan} alt="carpeMan" />
        </CarpeManContainer>
    )
}