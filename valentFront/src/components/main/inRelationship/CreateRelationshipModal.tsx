import styled from 'styled-components'

const ModalContainer = styled.div`
    display: flex;
    position: fixed;
    width: 25%;
    height: 45%;
`;

const FormContainer = styled.form`
    display: flex;
    position: fixed;
    width: 80%;
    height: 80%;
`;

const CreateEventButton = styled.button`
    display: flex;
    position: fixed;
    width: 35%;
    height: 10%;
`
export const CreateRelationshipModal = () => {
    return(
        <ModalContainer>
            <FormContainer>
                <CreateEventButton>Criar Evento</CreateEventButton>
            </FormContainer>
        </ModalContainer>
    )
}