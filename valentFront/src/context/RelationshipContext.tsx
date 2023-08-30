import { createContext, useContext, useState, ReactNode } from 'react';

interface RelationshipContextData {
    isUserInRelationship: boolean;
    updateRelationshipStatus: (status: boolean) => void;
}

const RelationshipContext = createContext<RelationshipContextData>(
    {} as RelationshipContextData
);

export function RelationshipProvider({ children }: { children: ReactNode }) {
    const [isUserInRelationship, setIsUserInRelationship] = useState(false);

    const updateRelationshipStatus = (status: boolean) => {
        setIsUserInRelationship(status);
        console.log("Relationship status updated to: " + status);
    };

    return (
        <RelationshipContext.Provider
            value={{ isUserInRelationship, updateRelationshipStatus }}
        >
            {children}
        </RelationshipContext.Provider>
    );
}

export function useRelationship() {
    return useContext(RelationshipContext);
}