import { InRelationship } from "../components/main/InRelationship";
import { NotInRelationship } from "../components/main/NotInRelationship";


export const Main = () => {
    const isInRelationship = false;
    return (
        <div>
            {isInRelationship ? <InRelationship /> : <NotInRelationship />}
        </div>
    )
}
