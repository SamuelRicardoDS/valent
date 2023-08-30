import { useEffect } from "react";
import { InRelationship } from "../components/main/inRelationship/InRelationship";
import { NotInRelationship } from "../components/main/notInRelationship/NotInRelationship";
import { useRelationship } from "../context/RelationshipContext";


export const Main = () => {
    const { isUserInRelationship, updateRelationshipStatus } = useRelationship();
    useEffect(() => {
        updateRelationshipStatus(false);
    }, [])
    
    return (
        <div>
            {isUserInRelationship ? <InRelationship /> : <NotInRelationship />}
        </div>
    )
}
