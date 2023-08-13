import styled from "styled-components";

const Container = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 40%;
    padding: 2%;
    bottom: 50%;
    `
const FormSendEmail = styled.form`
    display: flex;
    flex-direction: column;
    `
  


export const PutEmail = () => {
    return (
        <Container>
            <h1>put your pair email and send your code </h1>
            <h2>add your pair</h2>
          <FormSendEmail>
            <input type="email" name="" id="" placeholder="your pair email"/>
            <button>send your code</button>
          </FormSendEmail>
        </Container>
    );
}