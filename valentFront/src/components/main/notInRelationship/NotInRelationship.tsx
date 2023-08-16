import { Header } from "../../Header"
import { Content } from "./Content";
import { PutEmail } from "./PutEmail";

export const NotInRelationship = () => {
    return (
        <div>
          <Header/>
          <PutEmail />
          <Content />
        </div>
    );
}