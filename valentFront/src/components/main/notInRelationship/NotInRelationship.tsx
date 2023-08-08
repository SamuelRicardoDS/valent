import { Header } from "../../Header"
import { PutCode } from "./PutCode";
import { PutEmail } from "./PutEmail";

export const NotInRelationship = () => {
    return (
        <div>
          <Header/>
          <PutEmail />
          <PutCode />
        </div>
    );
}