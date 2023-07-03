import SectionHeader from "../SectionHeader/SectionHeader";
import p1 from '../../assets/project1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import './project.css'
const Projects = () => {
    return (
        <div className="h-screen w-full my-32 ">

            <SectionHeader headerTitle={'My Projects'} >

            </SectionHeader>




            <div className="p-container">
                <div className="p-card">
                    <img src={p2} alt="" />
                    <div className="p-intro">
                        <h1>Playstation</h1>
                        <h2><span className="font-bold">Technologies</span>: HTML | Tailwind CSS | React JS |React router | Firebase | Express JS | MongoDB </h2>
                        <p>  • Admin or seller can add new toys, update toys and can be deleted <br />
                            • A user can visit it without login but can’t buy anything without login <br />
                            • User can be able to save toys for later</p>
                        <div className=" text-[#754ef9] text-sm mt-2">
                            <a href="https://playstation-b5e06.web.app/#slide2" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Live-view</a>
                            <a href="https://github.com/golam-kibriya123/Play-station-server" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Server-Code</a>
                            <a href="https://github.com/golam-kibriya123/Play-station-client" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Client-code</a>
                        </div>
                    </div>
                </div>

                <div className="p-card">
                    <img src={p1} alt="" />
                    <div className="p-intro">
                        <h1>Drawing Club</h1>
                        <h2><span className="font-bold">Technologies</span>: HTML | Tailwind CSS | React JS |React router | Firebase | Express JS | MongoDB </h2>
                        <p>  • An admin can control all users, instructor or student and all course. <br />
                            • Student can by courses and can be able give feedback after login <br />
                            • An admin can be able to convert a student into an instructor. Instructor can add their won course.</p>
                        <div className=" text-[#754ef9] text-sm mt-2">
                            <a href="https://fir-app2-4d615.web.app/" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Live-view</a>
                            <a href="https://github.com/golam-kibriya123/drawing-club-server" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Server-Code</a>
                            <a href="https://github.com/golam-kibriya123/drawing-club-client" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Client-code</a>
                        </div>
                    </div>
                </div>

                <div className="p-card">
                    <img src={p3} alt="" />
                    <div className="p-intro">
                        <h1>Cook With Us</h1>
                        <h2><span className="font-bold">Technologies</span>: HTML | Tailwind CSS | React JS |React router | Firebase | Express JS | MongoDB </h2>
                        <p>  • A user can login with google and her own email account. Find recipes of many foods. <br />
                            • A user can find many counties food recipes on this website <br />
                            • A chef can be added recipe and update it if needed he can be able to delete or update it.</p>
                        <div className=" text-[#754ef9] text-sm mt-2">
                            <a href="https://snazzy-bublanina-82b958.netlify.app/" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Live-view</a>
                            <a href="https://github.com/golam-kibriya123/cook-with-us-server" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Server-Code</a>
                            <a href="https://github.com/golam-kibriya123/cook-with-us-client" className="mx-1 font-semibold border border-white p-1 hover:bg-[#754ef9] bg-white hover:text-white">Client-code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;