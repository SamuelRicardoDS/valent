import { InRelationship } from "../components/main/inRelationship/InRelationship";
import { NotInRelationship } from "../components/main/notInRelationship/NotInRelationship";
import { useRelationship } from "../context/RelationshipContext";
import { useNavigate, useParams } from "react-router-dom";


export const Main = () => {
    const { isUserInRelationship, updateRelationshipStatus } = useRelationship();
    const userId = useParams();
    const navigate = useNavigate();

    if(userId == null) {
        navigate("/")
    }
    
    updateRelationshipStatus()
    console.log(isUserInRelationship)
    return (
        <div>
            {isUserInRelationship ? <InRelationship /> : <NotInRelationship />}
        </div>
    )
}
