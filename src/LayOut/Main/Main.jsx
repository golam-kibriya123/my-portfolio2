import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const Main = () => {
    return (
        <div className="px-2 md:px-5 lg:px-10 bg-[#f3f3f3] h-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;