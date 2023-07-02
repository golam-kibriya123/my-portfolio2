import { Swiper, SwiperSlide } from "swiper/react";
import { BiLogoReact } from 'react-icons/bi';
import { TbBrandJavascript } from 'react-icons/tb';
import { BiLogoCss3 } from 'react-icons/bi';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaBootstrap } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiNetlify } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { BiLogoGit } from 'react-icons/bi';
import { BiLogoGithub } from 'react-icons/bi';
import { BiLogoFirebase } from 'react-icons/bi';
import { SiVercel } from 'react-icons/si';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import './homeSlider.css'

// import required modules
import { Autoplay, EffectCreative } from "swiper";

const HomeSlider = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      className="mySwiper3"
    >
      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <AiFillHtml5></AiFillHtml5>

          </div>
          <h3>HTML</h3>

        </div></SwiperSlide>
      <SwiperSlide>  <div className="flex flex-col justify-start items-start w-full " >
        <div >
          <BiLogoCss3></BiLogoCss3>

        </div>
        <h3>CSS</h3>

      </div></SwiperSlide>
      <SwiperSlide> <div className="flex flex-col justify-start items-start w-full " >
        <div >
          <FaBootstrap></FaBootstrap>

        </div>
        <h3>Bootstrap</h3>

      </div></SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoTailwindCss></BiLogoTailwindCss>
          </div>

          <h3>TailwindCss</h3>

        </div></SwiperSlide>
      <SwiperSlide> <div className="flex flex-col justify-start items-start w-full " >
        <div >
          <TbBrandJavascript></TbBrandJavascript>
        </div>

        <h3>JavaScript</h3>

      </div></SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoReact></BiLogoReact>
          </div>

          <h3>React JS </h3>

        </div></SwiperSlide>
      <SwiperSlide><div className="flex flex-col justify-start items-start w-full " >
        <div >
          <FaNodeJs></FaNodeJs>
        </div>

        <h3>Node JS</h3>

      </div></SwiperSlide>
      <SwiperSlide>  <div className="flex flex-col justify-start items-start w-full " >
        <div >
          <SiExpress></SiExpress>

        </div>
        <h3>Express JS</h3>
      </div></SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoMongodb></BiLogoMongodb>

          </div>
          <h3>MongoDB</h3>
        </div>
      </SwiperSlide>




      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoGit></BiLogoGit>

          </div>
          <h3>Git</h3>
        </div>
      </SwiperSlide>











      <SwiperSlide>

        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoGithub></BiLogoGithub>

          </div>
          <h3>GitHub</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <BiLogoFirebase></BiLogoFirebase>

          </div>
          <h3>Firebase</h3>
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <SiVercel></SiVercel>

          </div>
          <h3>Vercel</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col justify-start items-start w-full " >
          <div >
            <SiNetlify></SiNetlify>

          </div>
          <h3>Netlify</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;