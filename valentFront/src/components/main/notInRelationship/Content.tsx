import styled from "styled-components";

const Container = styled.div`
display: flex;
position: fixed;
padding: 2%;
flex-direction: column;
margin-right: 10%;
bottom: 20%;
right: 0;
`

const Title = styled.h1`
  text-align: center;
`
const SubTitle = styled.h2`
  text-align: center;
`

const Status = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  width: 60%;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 1%;
  background-color: #787878;
`
const StatusText = styled.p`
  text-align: center;
  font-size: large;
  font-weight: lighter;
`

export const Content = () => {
  return (
    <Container>
      <Title>when you both confirm your emails,<br/> you can start Valent</Title>
      <SubTitle>Status</SubTitle>
      <Status>
        <StatusText>waiting for your pair</StatusText>
      </Status>
    </Container>
  )
}