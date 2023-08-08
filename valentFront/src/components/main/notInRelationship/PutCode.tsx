import styled from "styled-components";

const Container = styled.div`
display: flex;
position: fixed;
padding: 2%;
flex-direction: column;
bottom: 20%;
right: 0;
`

const TitlePutCode = styled.h1`
  text-align: center;
`
const SubTitlePutCode = styled.h2`
  text-align: center;
`

const ButtonPutCode = styled.button`
  width: 32%;
  height: 50px;
  font-size: large;
  margin-top: 2%;
  border: none;
  border-radius: 50px;
  background-color: #787878;
  margin-left: 34%;
`
const InputPutCode = styled.input`
  width: 50%;
  height: 30px;
  border: none;
  margin-left: 25%;
  border-radius: 10px;
`
export const PutCode = () => {
  return (
    <Container>
      <TitlePutCode>When you both put in your codes, you can start Valent</TitlePutCode>
      <SubTitlePutCode>Add your pair code</SubTitlePutCode>
      <InputPutCode type="text" name="" id=""/>
      <ButtonPutCode>verify your pair code</ButtonPutCode>
    </Container>
  )
}