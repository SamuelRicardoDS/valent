import { InRelationship } from "../components/main/inRelationship/InRelationship";
import { NotInRelationship } from "../components/main/notInRelationship/NotInRelationship";


export const Main = () => {
    const isInRelationship = false;
    return (
        <div>
            {isInRelationship ? <InRelationship /> : <NotInRelationship />}
        </div>
    )
}
