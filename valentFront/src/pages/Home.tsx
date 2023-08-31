import { CarpeManComponent } from "../components/home/CarpeManComponent";
import { CarpeWomanComponent } from "../components/home/CarpeWomanComponent";
import { Header } from "../components/Header";
import { HomeContent } from "../components/home/HomeContent";

export const Home = () => {
    
    return (
        <div>
            <Header />
            <CarpeWomanComponent />
            <CarpeManComponent />
            <HomeContent />
        </div>
    );
}
