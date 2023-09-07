import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    width: 25%;
    top: 10%;
    background-color: aliceblue;
`;

const PartnerOneContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background-color: antiquewhite;
`;
const PartnerInfos = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    width: 20%;
`
export const PartnersInfos = () => {
    return(
        <Container>
            <PartnerOneContainer>
                <PartnerInfos>
                    <h1>name</h1>
                    <h2>email</h2>
                </PartnerInfos>
            </PartnerOneContainer>
        </Container>
    )
}