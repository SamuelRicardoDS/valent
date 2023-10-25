import styled from 'styled-components';
import { useParams } from "react-router-dom"
import { api } from "../../../services/api"
import { useEffect, useState } from 'react';

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
const PartnerTwoContainer = styled.div`
    margin-top: 10%;
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

interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    pairEmail: string,
    partnerId: number,
    relationship: {
        id: number,
        status: string,
        pairEmail: string,
        userId: number,
        createdAt: string,
        updatedAt: string
    }
}

export const PartnersInfos = () => {
    const [userOneData, setUserOneData] = useState<User | null>(null)
    const [userTwoData, setUserTwoData] = useState<User | null>(null)
    const { userId } = useParams()

    async function getPartnerInfos() {
        try {
            const response = await api.get(`/main/read-user/${userId}`)
            setUserOneData(response.data.user)
            if(userOneData?.partnerId === null) return
            console.log(`partnerId: ${userOneData?.partnerId}`)
            const responseUserTwo = await api.get(`main/read-user/${userOneData?.partnerId}`)
            console.log(responseUserTwo)
            setUserTwoData(responseUserTwo.data.user)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getPartnerInfos()
    }, [])
    
    return(
        <Container>
            <PartnerOneContainer>
                <PartnerInfos>
                    <h1>{userOneData?.name}</h1>
                    <h2>{userOneData?.email}</h2>
                </PartnerInfos>
            </PartnerOneContainer>
            <PartnerTwoContainer>
                <PartnerInfos>
                    <h1>{userTwoData?.name}</h1>
                    <h2>{userTwoData?.email}</h2>
                </PartnerInfos>
            </PartnerTwoContainer>
        </Container>
    )
}