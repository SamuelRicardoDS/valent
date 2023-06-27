import styled from 'styled-components';
import carpeWoman from '../../assets/carpeWoman.jpeg';

const CarpeWomanContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  bottom: 0;
  justify-content: flex-end;
  width: 30%; 
`;

export const CarpeWomanComponent = () => {
    return (
        <CarpeWomanContainer>
            <img src={carpeWoman} alt="carpeWoman" />
        </CarpeWomanContainer>
    )
}