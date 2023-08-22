import styled from "styled-components";
import { useState } from "react";
import { api } from "../../../services/api";
import { useParams } from "react-router-dom";

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

const TitleSendEmail = styled.h1`
    text-align: center;
`
const SubTitleSendEmail = styled.h2`
    margin-top: 0%;
    font-weight: lighter;
    text-align: center;
`

const InputPairEmail = styled.input`
    width: 60%;
    font-size: large;
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 1%;
    margin-left: 20%;
`
const SendEmailButton = styled.button`
    width: 32%;
    height: 50px;
    font-size: large;
    background-color: #787878;
    border: none;
    border-radius: 30px;
    margin-top: 2%;
    margin-left: 34%;
`

export const PutEmail = () => {
    const [pairEmail, setPairEmail] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPairEmail(e.target.value);
    }
    
    const { userId } = useParams();
    const data = {
        pairEmail: pairEmail
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        api.patch(`/main/send-pairemail/${userId}`, data);
    }

    return (
        <Container>
            <TitleSendEmail>put your pair email and send your code </TitleSendEmail>
            <SubTitleSendEmail>add your pair</SubTitleSendEmail>
          <FormSendEmail onSubmit={handleSubmit}>
            <InputPairEmail 
            type="email"
            name="" 
            id="" 
            placeholder="your pair email"
            value={pairEmail}
            onChange={handleChange}
            />
            <SendEmailButton type="submit">confirm</SendEmailButton>
          </FormSendEmail>
        </Container>
    );
}