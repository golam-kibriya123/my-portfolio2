import HomeSlider from "../HomeSlider/HomeSlider";
import { ImLinkedin2 } from 'react-icons/im';
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';
import resume from '../../assets/resume-of-Golam-Kibriya.pdf'

const HomeBanner = () => {
    return (
        <section className="w-full h-screen  flex md:flex-row flex-col space-y-10 md:space-y-0 ">
            <div className=" md:w-[45%] h-full flex flex-col justify-center items-start space-y-10">
                <div className="font-bold space-y-5">
                    <h3 className=" text-2xl">Hello, I am</h3>
                    <h1 className="text-4xl">Golam Kibriya</h1>
                    <p className="font-normal text-xl">I am junior react js front-end developer</p>
                </div>
                <div className="flex space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                        <ImLinkedin2 className="h-5 w-5 "></ImLinkedin2>

                    </div>
                    <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                        <ImFacebook className="h-5 w-5 "></ImFacebook>

                    </div>
                    <div className="w-10 h-10 bg-white rounded-full border border-primary transition duration-500 p-1 flex flex-row justify-center items-center cursor-pointer hover:bg-primary hover:text-white text-primary">
                        <BsInstagram className="h-5 w-5 "></BsInstagram>

                    </div>
                </div>
                <a className="border border-primary p-1 px-3 text-primary bg-white hover:bg-primary hover:text-white transition duration-700 flex  justify-center items-center font-semibold" href={resume} download={'resume-of-Golam-Kibriya'}>
                    Download My CV
                    <FaFileDownload className="ms-1 y "></FaFileDownload>

                </a>
            </div>

            <div className=" md:w-[55%] h-full   relative overflow-hidden ">
                <div className="md:w-[99%] md:h-full w-[300px] h-[300px] ms-20 md:ms-0 absolute border-4 border-[#754ef9] rounded-full ">
                </div>
                <div className="absolute  w-full h-full ">
                    <div className="w-full h-full  relative">
                        <div className="absolute md:top-[42%]  w-[300px] h-[100px] flex items-center md:-left-8 rotate-90 md:rotate-0 bg-[#f3f3f3] top-20 right-[83px] md:right-0 ">

                            <HomeSlider></HomeSlider>


                        </div>
                    </div>

                </div>


                <div className=" 
                
                top-0 right-0 w-0 h-0
                 md:border-[324px]
                 border-[235px] 
                border-t-[#754ef9]
                border-b-[#754ef9]
                border-l-transparent
                border-r-[#754ef9]
                rotate-90 md:rotate-0" >

                </div>

            </div>
        </section>
    );
};

export default HomeBanner;