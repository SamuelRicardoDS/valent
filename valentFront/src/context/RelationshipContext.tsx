import { createContext, useContext, useState, ReactNode } from 'react';
import { api } from '../services/api';
interface RelationshipContextData {
    isUserInRelationship: boolean;
    updateRelationshipStatus: () => Promise<void>;
    setUserId: (userId: string) => void
}

const RelationshipContext = createContext<RelationshipContextData>(
    {} as RelationshipContextData
);

export function RelationshipProvider({ children }: { children: ReactNode }) {
    const [isUserInRelationship, setIsUserInRelationship] = useState(false);
    const [userId, setUserId] = useState<string>("");

    const updateRelationshipStatus = async () => {
        console.log(userId)
        if(userId === "") {
            return console.log("user not found")
        } else {
            const response = await api.get(`/main/check-relationship/${userId}`);
            const relationshipStatus = response.data.message;
            console.log(relationshipStatus);
            if(relationshipStatus === "User is in a relationship") {
                setIsUserInRelationship(true);
                console.log("User is in a relationship")
            } else {
                setIsUserInRelationship(false);
                console.log("User is not in a relationship")
            }
        }
    };

    return (
        <RelationshipContext.Provider
            value={{ isUserInRelationship, updateRelationshipStatus, setUserId }}
        >
            {children}
        </RelationshipContext.Provider>
    );
}

export function useRelationship() {
    return useContext(RelationshipContext);
}