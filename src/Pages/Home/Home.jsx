import { useEffect } from "react";
import AboutMe from "../../Components/AboutMe/AboutMe";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import 'aos/dist/aos.css';
import Aos from "aos";
import { ImLinkedin2 } from 'react-icons/im';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import resume from '../../assets/resume-of-Golam-Kibriya.pdf'
import Footer from "../../Components/Footer/Footer";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div id="home">

            </div>

            {/* side social media bar */}
            <div className=" sticky top-0 z-40">
                <div data-aos="fade-right"
                    data-aos-duration="800"
                    className="absolute md:top-[450px] top-[370px] ">

                    <div className=" space-y-2 ">
                        <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                            <ImLinkedin2 className="h-5 w-5 "></ImLinkedin2>

                        </div>
                        <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                            <ImFacebook className="h-5 w-5 "></ImFacebook>

                        </div>
                        <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                            <BsInstagram className="h-5 w-5 "></BsInstagram>

                        </div>
                        <a className="border border-primary w-10 h-10 rounded-full p-1  text-primary bg-white hover:bg-primary hover:text-white transition duration-700 flex flex-col justify-center items-center font-semibold text-xs" href={resume} download={'resume-of-Golam-Kibriya'}>
                            <FaFileDownload className=" h-5 w-5 "></FaFileDownload>
                        </a>
                    </div>

                </div>
            </div>




            <HomeBanner></HomeBanner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;