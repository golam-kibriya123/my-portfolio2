import { Parallax } from "react-parallax";
import SectionHeader from "../SectionHeader/SectionHeader";

import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { BiLogoReact } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';

const Skills = () => {

    return (
        <div className={`h-[236vh] w-full p-15  mt-52    `} >
            <div className="h-full w-full  ">

                <SectionHeader
                    headerTitle={'My Skills'}>

                </SectionHeader>

                <div className="  w-full h-full relative bg-fixed pt-5" style={{ backgroundImage: "url('../../../public/pxfuel.jpg')" }}>


                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <AiFillHtml5 className="inline"></AiFillHtml5>
                                    <h3 className="inline">Html</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <BiLogoCss3 className="inline"></BiLogoCss3>
                                    <h3 className="inline">CSS</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <FaBootstrap className="inline"></FaBootstrap>
                                    <h3 className="inline">Bootstrap</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <BiLogoTailwindCss className="inline"></BiLogoTailwindCss>
                                    <h3 className="inline">Tailwind CSS</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <TbBrandJavascript className="inline"></TbBrandJavascript>
                                    <h3 className="inline">JavaScript</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <BiLogoReact className="inline"></BiLogoReact>
                                    <h3 className="inline">React JS</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <FaNodeJs className="inline"></FaNodeJs>
                                    <h3 className="inline">Node JS</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <SiExpress className="inline"></SiExpress>
                                    <h3 className="inline">Express JS</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <BiLogoMongodb className="inline"></BiLogoMongodb>
                                    <h3 className="inline">MongoDB</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>

                    <Parallax strength={200} renderLayer={(percentage) => (
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(117, 66 ,241, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 350,
                                height: percentage * 400
                            }}

                        >

                        </div>)}  >

                        <div
                            className=" bg-opacity-25 w-full h-[150px] 
                    ">
                            <div style={{
                                background: "white",
                                padding: 20,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)"
                            }}>

                                <div className=" flx flex-row text-[#754ef9] font-bold text-2xl">
                                    <BiLogoGithub className="inline"></BiLogoGithub>
                                    <h3 className="inline">GitHub</h3>
                                </div>
                            </div>
                        </div>
                    </Parallax>
             




                </div>

            </div >

        </div >
    );
};

export default Skills;